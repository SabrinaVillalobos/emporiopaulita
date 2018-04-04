import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAHtEMU_RZTDOC_26KPxjIBS3fKX-bT-oA",
  authDomain: "emporio-paulita.firebaseapp.com",
  databaseURL: "https://emporio-paulita.firebaseio.com",
  storageBucket: "emporio-paulita.appspot.com",
  messagingSenderId: "138555502480"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};