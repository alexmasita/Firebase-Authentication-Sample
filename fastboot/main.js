const FastBootAppServer = require('fastboot-app-server');
const admin = require('firebase-admin');
var serviceAccount = require("../mobile-services-9f146-firebase-adminsdk-2n1f2-ee385fc648.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mobile-services-9f146.firebaseio.com"
});

let server = new FastBootAppServer({
  beforeMiddleware: function (app) {
    app.get('/*', async (req, res, next) => {
      console.log('firebase verifyID Token get entered');
      //console.log('req.headers');
      //console.log(req.headers)
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
          const idToken = req.headers.authorization.split('Bearer ')[1];
          console.log('idToken: ', idToken);
          const auth = admin.auth();
          const decodedIdToken = await auth.verifyIdToken(idToken);
          const {
            uid
          } = decodedIdToken;
          const customToken = await auth.createCustomToken(uid);
          console.log('firebase verifyID Token customToken: ', customToken);
          req.headers.authorization = `Bearer ${customToken}`;
        } catch (error) {
          console.log('firebase verifyID Token error');
          console.log(error);
        }
      }

      next();
    });
  },
  distPath: 'dist',
  gzip: true
});

server.start();
