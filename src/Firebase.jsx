// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Corrected import
import { getFirestore } from "firebase/firestore";  // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO5cp7VLQrR7rZvWT89_AmiiobSJiXMuc",
  authDomain: "task-manager-d3dfc.firebaseapp.com",
  projectId: "task-manager-d3dfc",
  storageBucket: "task-manager-d3dfc.firebasestorage.app",
  messagingSenderId: "523173196476",
  appId: "1:523173196476:web:b4fe90e69a0dbcd97716b9",
  measurementId: "G-BTBGSL7D52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);  // Export Firestore for use in your app

// If you need Analytics, you can keep this line
// const analytics = getAnalytics(app);
