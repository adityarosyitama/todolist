/* eslint-disable prettier/prettier */
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCNBu863YQCNosYd8pS2W-nWdztNf6Hyj4',
  authDomain: 'aditprojt.firebaseapp.com',
  projectId: 'aditprojt',
  storageBucket: 'aditprojt.appspot.com',
  messagingSenderId: '905421255174',
  appId: '1:905421255174:web:0adc029325d80c201bc987',
  measurementId: 'G-QK11DFGVZN',
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
