import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

const app = firebase.initializeApp({  
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
