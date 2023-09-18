// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa7rN3Luv8GqNdHVqk3aJ55QPtpp1_koc",
  authDomain: "react-native-project-9c4db.firebaseapp.com",
  projectId: "react-native-project-9c4db",
  storageBucket: "react-native-project-9c4db.appspot.com",
  messagingSenderId: "756146345159",
  appId: "1:756146345159:web:793108eae96c92d93bdae2",
  measurementId: "G-MW19TJQTDY",
};



export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getAuth(FIREBASE_APP);

