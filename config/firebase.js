// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvbbYLSDd_tikiJ5lfFxs5p5HLpAIwKz8",
  authDomain: "hackathon-a19bd.firebaseapp.com",
  projectId: "hackathon-a19bd",
  storageBucket: "hackathon-a19bd.appspot.com",
  messagingSenderId: "744599426044",
  appId: "1:744599426044:web:375421528bc831a4035879",
  measurementId: "G-0D4WXZB3FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);