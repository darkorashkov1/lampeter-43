// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWIvZilNXaTyW5NNF68uitVtdsPwUVdo4",
  authDomain: "lampeter-43.firebaseapp.com",
  projectId: "lampeter-43",
  storageBucket: "lampeter-43.firebasestorage.app",
  messagingSenderId: "690098919374",
  appId: "1:690098919374:web:5aed7faa14571fc32c7d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);