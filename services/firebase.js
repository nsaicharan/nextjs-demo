import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDszbD8p2UwvZVbVHByXHJyTV_5BpJEQvY',
  authDomain: 'nextjs-practice-2362d.firebaseapp.com',
  projectId: 'nextjs-practice-2362d',
  storageBucket: 'nextjs-practice-2362d.appspot.com',
  messagingSenderId: '859972214014',
  appId: '1:859972214014:web:21e1c29b3bba47207799af',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}