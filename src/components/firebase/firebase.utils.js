import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-nwOMBGhrcocYi6xx0grmkHWVfjrqH2I",
    authDomain: "reactproject-981ac.firebaseapp.com",
    projectId: "reactproject-981ac",
    storageBucket: "reactproject-981ac.appspot.com",
    messagingSenderId: "704935482937",
    appId: "1:704935482937:web:9d8ae6bd79fd3ab0741fe8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;