import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

const app = firebase.initializeApp({  
  apiKey: "AIzaSyDK4l6COTGDZn0ZrLB9S925PuYtghEJTyQ",
  authDomain: "photoalbum-e6d90.firebaseapp.com",
  databaseURL: "https://photoalbum-e6d90.firebaseio.com",
  projectId: "photoalbum-e6d90",
  storageBucket: "photoalbum-e6d90.appspot.com",
  messagingSenderId: "156930765186",
  appId: "1:156930765186:web:ba1a4ea1d0110ab9921f9b",
  measurementId: "G-LP2FCTNHMW"
});

const provider = new firebase.auth.GoogleAuthProvider();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;


export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const user = firebase.auth().currentUser;

export { projectStorage, projectFirestore, timeStamp };  
export const firestore = firebase.firestore();
export const auth = app.auth();
export default app;
