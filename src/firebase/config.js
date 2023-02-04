// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQyBHMDKHugAxAiBY63up6mW8_x1QO9C4',
  authDomain: 'hostlify2.firebaseapp.com',
  databaseURL: 'https://hostlify2-default-rtdb.firebaseio.com',
  projectId: 'hostlify2',
  storageBucket: 'hostlify2.appspot.com',
  messagingSenderId: '827107703825',
  appId: '1:827107703825:web:8cd7919613d67b70a005b0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
