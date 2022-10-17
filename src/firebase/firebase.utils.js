import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA5chCrvbIpUGKdOXjWUWEl6XX1XN3EqOE",
  authDomain: "crwn-db-e4970.firebaseapp.com",
  projectId: "crwn-db-e4970",
  storageBucket: "crwn-db-e4970.appspot.com",
  messagingSenderId: "747112774461",
  appId: "1:747112774461:web:4898e54a4980710fc66354",
  measurementId: "G-PFLK0201KB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
