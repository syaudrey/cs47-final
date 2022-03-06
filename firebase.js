// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKlupZcthkLzHREoztQbls-gqWdg6gMu0",
  authDomain: "cs-147-final-project.firebaseapp.com",
  projectId: "cs-147-final-project",
  storageBucket: "cs-147-final-project.appspot.com",
  messagingSenderId: "97814214800",
  appId: "1:97814214800:web:54b72ece3c5c81f3f00015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };