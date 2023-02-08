// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsTBzs5i8_y-BSsjvBhUFJcTpRwfEICes",
  authDomain: "calorie-calculator-641fe.firebaseapp.com",
  projectId: "calorie-calculator-641fe",
  storageBucket: "calorie-calculator-641fe.appspot.com",
  messagingSenderId: "885763251702",
  appId: "1:885763251702:web:d63ba679f10d19eae57bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);