import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDK4l6COTGDZn0ZrLB9S925PuYtghEJTyQ",
    authDomain: "photoalbum-e6d90.firebaseapp.com",
    databaseURL: "https://photoalbum-e6d90.firebaseio.com",
    projectId: "photoalbum-e6d90",
    storageBucket: "photoalbum-e6d90.appspot.com",
    messagingSenderId: "156930765186",
    appId: "1:156930765186:web:ba1a4ea1d0110ab9921f9b",
    measurementId: "G-LP2FCTNHMW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const provider = new firebase.auth.GoogleAuthProvider();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };