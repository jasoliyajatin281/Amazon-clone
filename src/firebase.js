import firebase from "firebase";
import "firebase/firestore"; //For the database
import "firebase/auth"; // For auth

const firebaseConfig = {
  apiKey: "AIzaSyADPpXa2c9k9L58gaF3D0SCUaYrIuob5n8",
  authDomain: "clone-40661.firebaseapp.com",
  projectId: "clone-40661",
  storageBucket: "clone-40661.appspot.com",
  messagingSenderId: "924636189778",
  appId: "1:924636189778:web:114801a6e55e4af8e07b8b",
  measurementId: "G-QS6QH9YEBG",
};

// Two manin things

// Step-1: Initialized app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Step-2: Initialized DB anad Auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
