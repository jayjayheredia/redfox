import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

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
      const hora = prompt(`Hora para ${info.dateStr}`);
      if (!hora) return;

      const nombre = prompt(`Nombre`);
      if (!nombre) return;

      const telefono = prompt(`Teléfono`);
      if (!telefono) return;

      const fechaHora = `${info.dateStr}T${hora}:00`;

      const check = query(turnosRef, where("start", "==", fechaHora));
      const res = await getDocs(check);

      if (!res.empty) return alert("Turno ocupado");

      await addDoc(turnosRef, {
        title: nombre,
        start: fechaHora,
        phone: telefono,
        status: "pendiente"
      });

      alert("Turno solicitado");
      calendar.addEvent({ title: `${nombre} (pendiente)`, start: fechaHora, color: '#facc15' });
    }
  });

  calendar.render();
});