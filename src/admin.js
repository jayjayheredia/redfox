import { db, auth } from './firebase-config.js';
import { collection, getDocs, query, where, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const turnosRef = collection(db, 'turnos');
const pendientesDiv = document.getElementById('turnos-pendientes');
const aprobadosDiv = document.getElementById('turnos-aprobados');

document.getElementById('logout-btn').addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = 'login.html';
});

onAuthStateChanged(auth, (user) => {
    if (!user) window.location.href = 'login.html';
    else cargarTurnos();
});

async function cargarTurnos() {
    const pendientesSnap = await getDocs(query(turnosRef, where("status", "==", "pendiente")));
    const aprobadosSnap = await getDocs(query(turnosRef, where("status", "==", "aprobado")));

    pendientesDiv.innerHTML = '';
    aprobadosDiv.innerHTML = '';

    pendientesSnap.forEach(docSnap => {
        const data = docSnap.data();
        const id = docSnap.id;
        pendientesDiv.innerHTML += `
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${data.title} - ${data.start} - ${data.phone}</span>
            <div class="space-x-2">
              <button class="px-3 py-2 bg-green-500 text-white rounded" onclick="aprobarTurno('${id}')">Aprobar</button>
              <button class="px-3 py-2 bg-red-500 text-white rounded" onclick="eliminarTurno('${id}')">Eliminar</button>
            </div>
          </div>`;
    });

    aprobadosSnap.forEach(docSnap => {
        const data = docSnap.data();
        const id = docSnap.id;
        aprobadosDiv.innerHTML += `
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${data.title} - ${data.start} - ${data.phone}</span>
            <button class="px-3 py-2 bg-red-500 text-white rounded" onclick="eliminarTurno('${id}')">Eliminar</button>
          </div>`;
    });
}

window.aprobarTurno = async (id) => {
    await updateDoc(doc(db, 'turnos', id), { status: 'aprobado' });
    alert('Turno aprobado ✅');
    cargarTurnos();
};

window.eliminarTurno = async (id) => {
    await deleteDoc(doc(db, 'turnos', id));
    alert('Turno eliminado ❌');
    cargarTurnos();
};