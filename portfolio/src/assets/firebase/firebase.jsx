import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

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
  
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export const generateUserDocument = async (user, additionalData) => {
    if(!user) return;  
    const userRef = firestore.doc(`user/${user.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } 
      catch (error){
        console.error("Error in creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if(!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/$uid`).get();
      return {
        uid,
        ...userDocument.data()
      };
    }
    catch(error){
      console.error("Error fetching user", error);
    } 
  }
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  export { projectStorage, timestamp };  
  export const firestore = firebase.firestore();
  export const auth = firebase.auth();