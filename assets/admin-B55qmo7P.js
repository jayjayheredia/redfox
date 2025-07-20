import{c as h,d as o,e as m,o as g,u as f,f as p,h as y,g as i,q as r,w as d,b}from"./firebase-config-YcMalVYY.js";const c=h(o,"turnos"),u=document.getElementById("turnos-pendientes"),l=document.getElementById("turnos-aprobados");document.getElementById("logout-btn").addEventListener("click",async()=>{await m(b),window.location.href="login.html"});g(b,t=>{t?s():window.location.href="login.html"});async function s(){const t=await i(r(c,d("status","==","pendiente"))),w=await i(r(c,d("status","==","aprobado")));u.innerHTML="",l.innerHTML="",t.forEach(e=>{const n=e.data(),a=e.id;u.innerHTML+=`
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${n.title} - ${n.start} - ${n.phone}</span>
            <div class="space-x-2">
              <button class="px-3 py-2 bg-green-500 text-white rounded" onclick="aprobarTurno('${a}')">Aprobar</button>
              <button class="px-3 py-2 bg-red-500 text-white rounded" onclick="eliminarTurno('${a}')">Eliminar</button>
            </div>
          </div>`}),w.forEach(e=>{const n=e.data(),a=e.id;l.innerHTML+=`
          <div class="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>${n.title} - ${n.start} - ${n.phone}</span>
            <button class="px-3 py-2 bg-red-500 text-white rounded" onclick="eliminarTurno('${a}')">Eliminar</button>
          </div>`})}window.aprobarTurno=async t=>{await f(p(o,"turnos",t),{status:"aprobado"}),alert("Turno aprobado ✅"),s()};window.eliminarTurno=async t=>{await y(p(o,"turnos",t)),alert("Turno eliminado ❌"),s()};
