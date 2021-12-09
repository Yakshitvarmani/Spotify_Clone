import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC8UJudKlYiECeR_3y-WInC42N0n2-zLhc",
  authDomain: "spotify-clone-7a568.firebaseapp.com",
  projectId: "spotify-clone-7a568",
  storageBucket: "spotify-clone-7a568.appspot.com",
  messagingSenderId: "443407036304",
  appId: "1:443407036304:web:8fa0bd1e3efad475600d15",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
