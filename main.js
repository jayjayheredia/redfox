import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async function () {
  const calendarEl = document.getElementById('calendar');
  const turnosRef = collection(db, "turnos");

  // Cargar todos los turnos (pendientes y aprobados)
  const getTurnos = async () => {
    const snapshot = await getDocs(turnosRef);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        title: `${data.title} (${data.status})`,
        start: data.start,
        color: data.status === 'pendiente' ? '#facc15' : '#22c55e' // amarillo pendientes, verde aprobados
      };
    });
  };

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    selectable: true,
    events: await getTurnos(),

    dateClick: async function(info) {
      const hora = prompt(`Seleccioná el horario para el día ${info.dateStr} (Ejemplo: 14:30)`);
      if (!hora) return;

      const nombre = prompt(`Ingresa tu nombre para reservar ${info.dateStr} a las ${hora}`);
      if (!nombre) return;

      const telefono = prompt(`Ingresa un telefono para confirmar el turno ${info.dateStr}`);
      if (!telefono) return;

      const fechaHora = `${info.dateStr}T${hora}:00`; // formato ISO

      // Verificar si ese turno ya está reservado (aprobado o pendiente)
      const check = query(turnosRef, where("start", "==", fechaHora));
      const res = await getDocs(check);

      if (!res.empty) {
        alert("Este turno ya está reservado. Elegí otro horario.");
        return;
      }

      await addDoc(turnosRef, {
        title: nombre,
        start: fechaHora,
        phone: telefono,
        status: "pendiente"
      });

      alert("Turno solicitado correctamente.");
      calendar.addEvent({ title: `${nombre} (pendiente)`, start: fechaHora, color: '#facc15' });
    }
  });

  calendar.render();
});
