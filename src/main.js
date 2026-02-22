import { db } from './firebase-config.js';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

import 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js';

document.addEventListener('DOMContentLoaded', async function () {
  const calendarEl = document.getElementById('calendar');
  const turnosRef = collection(db, "turnos");

  const getTurnos = async () => {
    const snapshot = await getDocs(turnosRef);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        title: `${data.title} (${data.status})`,
        start: data.start,
        color: data.status === 'pendiente' ? '#facc15' : '#22c55e'
      };
    });
  };

  const calendar = new window.FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    selectable: true,
    events: await getTurnos(),

dateClick: async function(info) {
  // 1. Usamos un modal para pedir la hora y los datos
  const { value: formValues } = await Swal.fire({
    title: `Nuevo turno para el ${info.dateStr}`,
    html:
      '<label class="swal-label">Seleccione la hora:</label>' +
      '<input id="swal-input-time" type="time" class="swal2-input">' +
      '<input id="swal-input-name" placeholder="Nombre completo" class="swal2-input">' +
      '<input id="swal-input-phone" placeholder="Teléfono" class="swal2-input">',
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Reservar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const time = document.getElementById('swal-input-time').value;
      const name = document.getElementById('swal-input-name').value;
      const phone = document.getElementById('swal-input-phone').value;
      
      if (!time || !name || !phone) {
        Swal.showValidationMessage('Por favor completa todos los campos');
        return false;
      }
      return { time, name, phone };
    }
  });

  // Si el usuario canceló, no hacemos nada
  if (!formValues) return;

  const { time, name, phone } = formValues;
  const fechaHora = `${info.dateStr}T${time}:00`;

  // 2. Verificar disponibilidad en Firebase
  const check = query(turnosRef, where("start", "==", fechaHora));
  const res = await getDocs(check);

  if (!res.empty) {
    return Swal.fire("Error", "Este horario ya está ocupado", "error");
  }

  // 3. Guardar en Firestore
  try {
    await addDoc(turnosRef, {
      title: name,
      start: fechaHora,
      phone: phone,
      status: "pendiente"
    });

    // 4. Actualizar calendario visualmente
    calendar.addEvent({ 
      title: `${name} (pendiente)`, 
      start: fechaHora, 
      color: '#facc15' 
    });

    Swal.fire("¡Éxito!", "Turno solicitado correctamente", "success");
  } catch (error) {
    Swal.fire("Error", "No se pudo guardar el turno", "error");
  }
}
  });

  calendar.render();
});