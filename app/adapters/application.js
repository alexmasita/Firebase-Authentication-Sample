import CloudFirestoreAdapter from 'ember-cloud-firestore-adapter/adapters/cloud-firestore';
// import {
//   inject as service
// } from '@ember/service';
// import {
//   get
// } from '@ember/object';
export default CloudFirestoreAdapter.extend({
  host: 'https://us-central1-mobile-services-9f146.cloudfunctions.net/poll',
  //firebase: service(),
  firestoreSettings: null //,
  // init() {
  //   this._super(...arguments);
  //   get(this, 'firebase').firestore().enablePersistence();
  // }
});
