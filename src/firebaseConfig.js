import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_2pu3oCBJ8UJM15-96KOX4ahgAQc09jg",
  authDomain: "back-firebase-ed16d.firebaseapp.com",
  projectId: "back-firebase-ed16d",
  storageBucket: "back-firebase-ed16d.firebasestorage.app",
  messagingSenderId: "862618838275",
  appId: "1:862618838275:web:bcce4d84f86bf14c867536"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)