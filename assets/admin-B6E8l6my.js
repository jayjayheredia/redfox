import{d as a,a as p}from"./firebase-config-aHfz9ZPR.js";import{collection as w,getDocs as r,query as s,where as d,updateDoc as h,doc as b,deleteDoc as g}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{signOut as f,onAuthStateChanged as y}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";const c=w(a,"turnos"),u=document.getElementById("turnos-pendientes"),l=document.getElementById("turnos-aprobados");document.getElementById("logout-btn").addEventListener("click",async()=>{await f(p),window.location.href="login.html"});y(p,t=>{t?i():window.location.href="login.html"});async function i(){const t=await r(s(c,d("status","==","pendiente"))),m=await r(s(c,d("status","==","aprobado")));u.innerHTML="",l.innerHTML="",t.forEach(e=>{const n=e.data(),o=e.id;u.innerHTML+=`
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${n.title} - ${n.start} - ${n.phone}</span>
            <div class="space-x-2">
              <button onclick="aprobarTurno('${o}')" class="px-3 py-2 bg-green-500 text-white rounded">Aprobar</button>
              <button onclick="eliminarTurno('${o}')" class="px-3 py-2 bg-red-500 text-white rounded">Eliminar</button>
            </div>
          </div>
        `}),m.forEach(e=>{const n=e.data(),o=e.id;l.innerHTML+=`
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${n.title} - ${n.start} - ${n.phone}</span>
            <button onclick="eliminarTurno('${o}')" class="px-3 py-2 bg-red-500 text-white rounded">Eliminar</button>
          </div>
        `})}window.aprobarTurno=async t=>{await h(b(a,"turnos",t),{status:"aprobado"}),alert("Turno aprobado ✅"),i()};window.eliminarTurno=async t=>{await g(b(a,"turnos",t)),alert("Turno eliminado ❌"),i()};
