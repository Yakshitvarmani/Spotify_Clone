import firebase from "firebase";

//authentication
import "firebase/auth";
//firebase db
import "firebase/firestore";
// real time db
import "firebase/database";

// storage

import "firebase/storage";
import "firebase/functions";

//
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8UJudKlYiECeR_3y-WInC42N0n2-zLhc",
  authDomain: "spotify-clone-7a568.firebaseapp.com",
  projectId: "spotify-clone-7a568",
  storageBucket: "spotify-clone-7a568.appspot.com",
  messagingSenderId: "443407036304",
  appId: "1:443407036304:web:8fa0bd1e3efad475600d15",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
