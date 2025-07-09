// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp1FjH81IIsLY-qjooc--nBumMi3_5FSY",
  authDomain: "netflix-gpt-ff3cc.firebaseapp.com",
  projectId: "netflix-gpt-ff3cc",
  storageBucket: "netflix-gpt-ff3cc.firebasestorage.app",
  messagingSenderId: "463032505826",
  appId: "1:463032505826:web:6a8eb432515e2f9d5bd5bb",
  measurementId: "G-HVH8YZM1GS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
