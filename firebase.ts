import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLQdlIqml4WiClE1ES6nZsS6WvaSX72og",
  authDomain: "insta-fishing.firebaseapp.com",
  projectId: "insta-fishing",
  storageBucket: "insta-fishing.appspot.com",
  messagingSenderId: "65701383051",
  appId: "1:65701383051:web:f38cc6ea011018fe86bd8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
