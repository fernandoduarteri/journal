// Import the functions you need from the SDKs you need


import 'firebase/firestore';
import 'firebase/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyCtI_ZEYeKhUgHje_uxRjZIAirXMH_7g4Y",
//   authDomain: "react-app-journal-ed4d9.firebaseapp.com",
//   projectId: "react-app-journal-ed4d9",
//   storageBucket: "react-app-journal-ed4d9.appspot.com",
//   messagingSenderId: "239405562871",
//   appId: "1:239405562871:web:f605e9a5286215a0ba0cf2"
// };


// firebase.initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtI_ZEYeKhUgHje_uxRjZIAirXMH_7g4Y",
  authDomain: "react-app-journal-ed4d9.firebaseapp.com",
  projectId: "react-app-journal-ed4d9",
  storageBucket: "react-app-journal-ed4d9.appspot.com",
  messagingSenderId: "239405562871",
  appId: "1:239405562871:web:f605e9a5286215a0ba0cf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db, 
    googleAuthProvider, 
    app
}