import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';
export default Component.extend({
  session: service(),
  actions: {
    login() {
      console.log('isAuthenticated');
      console.log(this.session.isAuthenticated);
      this.session.invalidate().then(() => {

      });
      let {
        email,
        password
      } = this.getProperties('email', 'password');
      console.log('email: ', email);
      console.log('password: ', password);
      return this.session.authenticate('authenticator:firebase', (auth) => {
        return auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
          //you can use userCredential.user here
          console.log('userCredential');
          console.log(userCredential);
          return userCredential;
        });
      }).catch((reason) => {
        console.log('error reason: ');
        console.log(reason);
        this.set('errorMessage', reason.error);
      });
    }
  }
});
