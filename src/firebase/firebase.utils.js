import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";



const config = {
  apiKey: "AIzaSyA5chCrvbIpUGKdOXjWUWEl6XX1XN3EqOE",
  authDomain: "crwn-db-e4970.firebaseapp.com",
  projectId: "crwn-db-e4970",
  storageBucket: "crwn-db-e4970.appspot.com",
  messagingSenderId: "747112774461",
  appId: "1:747112774461:web:4898e54a4980710fc66354",
  measurementId: "G-PFLK0201KB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  

  const snapShot = await userRef.get(); 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
