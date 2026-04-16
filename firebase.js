import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
// Configured for fire-dispatcher-7aaba project
const firebaseConfig = {
  apiKey: "AIzaSyBB49D5QIpNWVaPwk0za9XPPKc5TROEssc",
  authDomain: "fire-dispatcher-7aaba.firebaseapp.com",
  databaseURL: "https://fire-dispatcher-7aaba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-dispatcher-7aaba",
  storageBucket: "fire-dispatcher-7aaba.firebasestorage.app",
  messagingSenderId: "1088508179387",
  appId: "1:1088508179387:web:00ae3c9bc59a0e3df54a9e",
  measurementId: "G-YW06SYJNTP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);