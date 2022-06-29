import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALwYXiQoKpTk3xM8X_AQWsk7CcTUcv0O8",
  authDomain: "employee-portal-cadf0.firebaseapp.com",
  projectId: "employee-portal-cadf0",
  storageBucket: "employee-portal-cadf0.appspot.com",
  messagingSenderId: "326798631905",
  appId: "1:326798631905:web:d7354ae30c5285b07ea8a0",
  measurementId: "G-S506J07Z88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
