import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "firebase/auth";

document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'admin.html';
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message);
  }
});
