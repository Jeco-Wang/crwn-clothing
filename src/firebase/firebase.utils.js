import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB3BaKYJ8CtbgzFOVDqz04isI2EV1qa9IY',
  authDomain: 'crwn-db-f811f.firebaseapp.com',
  projectId: 'crwn-db-f811f',
  storageBucket: 'crwn-db-f811f.appspot.com',
  messagingSenderId: '1094729082242',
  appId: '1:1094729082242:web:8ea19ac03af218a4a71b9b',
  measurementId: 'G-1HNBWY2CBR',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
