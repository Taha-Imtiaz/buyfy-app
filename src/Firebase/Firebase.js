import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBxZTUKZu3kNsFmE7FY4GJ-2GZVrpgwJhg",
  authDomain: "buyfy-app.firebaseapp.com",
  projectId: "buyfy-app",
  storageBucket: "buyfy-app.appspot.com",
  messagingSenderId: "1008227116930",
  appId: "1:1008227116930:web:96c7d52109d29208e5919b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var serverTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref();

export default firebase;
