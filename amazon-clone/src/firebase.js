import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyTOHyyinJnekDEcBd5t8WTO5nTWu4pd8",
    authDomain: "challenge-7852d.firebaseapp.com",
    projectId: "challenge-7852d",
    storageBucket: "challenge-7852d.appspot.com",
    messagingSenderId: "413563412583",
    appId: "1:413563412583:web:d0b04930026e35ae2634c2",
    measurementId: "G-G5N862B1V5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};