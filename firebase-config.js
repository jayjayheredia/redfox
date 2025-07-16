import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDu5IjABSjp7U8_0OvllhM0GcMnXUzwsJQ",
  authDomain: "turno-fdd1b.firebaseapp.com",
  projectId: "turno-fdd1b",
  storageBucket: "turno-fdd1b.firebasestorage.app",
  messagingSenderId: "253806761280",
  appId: "1:253806761280:web:45af732a9418f0c46b96a5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);