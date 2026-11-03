// Comportamiento de KHAOS. Una función por pantalla, elegida por el
// atributo data-pantalla del <body>. Scripts normales (sin import/export/
// type="module") para que la app funcione abriendo el archivo con doble clic.

// Única puerta a los datos: hoy lee DATOS de data.js, mañana una consulta
// real a Supabase. Nada más en el código debe tocar DATOS directamente.
function obtenerDatos(tipo) {
  return DATOS[tipo];
}

function pantallaIndex() {
  // Inicio no tiene comportamiento propio todavía: es solo mensaje +
  // navegación, y la navegación ya funciona con links reales (<a href>).
}

document.addEventListener("DOMContentLoaded", function () {
  const pantalla = document.body.getAttribute("data-pantalla");

  if (pantalla === "index") {
    pantallaIndex();
  }
});
