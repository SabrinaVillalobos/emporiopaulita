import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAHtEMU_RZTDOC_26KPxjIBS3fKX-bT-oA",
  authDomain: "emporio-paulita.firebaseapp.com",
  databaseURL: "https://emporio-paulita.firebaseio.com",
  storageBucket: "emporio-paulita.appspot.com",
  messagingSenderId: "138555502480"
};


firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();