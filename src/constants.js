//import firebase from 'firebase'
// Required for side-effects
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config)
export const ref = firebase.database().ref()
export const store = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
store.settings(settings);
export const firebaseAuth = firebase.auth
export const storeageRef = firebase.storage().ref();