import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOMNbbI4wuwQAWsi7xunjbwHVIp6xiQkM',
  authDomain: 'musicplayer-8caa0.firebaseapp.com',
  projectId: 'musicplayer-8caa0',
  storageBucket: 'musicplayer-8caa0.appspot.com',
  appId: '1:419865975945:web:241f30c990b091f1b87a58',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
