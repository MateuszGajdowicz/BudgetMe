// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Twoja konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEipbFhzU8ul6goGa2cts73jj4SQER9v0",
  authDomain: "budgetme-84ef2.firebaseapp.com",
  projectId: "budgetme-84ef2",
  storageBucket: "budgetme-84ef2.firebasestorage.app",
  messagingSenderId: "757066442495",
  appId: "1:757066442495:web:3d4809d249975cac7aceca",
  measurementId: "G-RCGK2RDHQX"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app); // Dodajemy db


// Eksportuj Firebase, jeśli chcesz używać go w innych częściach aplikacji
export {db, app, analytics,auth };
