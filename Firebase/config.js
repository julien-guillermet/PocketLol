import * as firebase from 'firebase';

class Firebase {
  /**
     * Initialises Firebase
     */
  static initialise() {
    firebase.initializeApp({
      apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      authDomain: 'pocketlol.firebaseapp.com',
      databaseURL: 'https://pocketlol.firebaseio.com',
      projectId: 'pocketlol',
      storageBucket: 'pocketlol.appspot.com',
      messagingSenderId: '792731491060',
    });
  }
}

module.exports = Firebase;
