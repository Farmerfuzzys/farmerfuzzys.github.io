import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiYOJWP4XMQRJ6b-RfJp6Aqxis7E-uA30",
  authDomain: "farmerfuzzys-c32eb.firebaseapp.com",
  projectId: "farmerfuzzys-c32eb",
  storageBucket: "farmerfuzzys-c32eb.firebasestorage.app",
  messagingSenderId: "842395157432",
  appId: "1:842395157432:web:fd031d7cc0c2a6e69ec54d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
