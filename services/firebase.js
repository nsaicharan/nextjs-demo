import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
