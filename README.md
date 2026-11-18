# KHAOS App — versión web standalone

Esta carpeta es la versión final de la app KHAOS exportada como sitio
web estático (HTML/CSS/JS puro, sin dependencias externas ni build
step). Corre tal cual en cualquier hosting estático, incluido Vercel.

## Estructura

- `index.html` — punto de entrada.
- `app.css` — estilos y animaciones (incluye la tipografía Stretch Pro embebida).
- `template.html` — el markup de toda la app (todas las pantallas).
- `app-logic.js` — la lógica de la app (estado, pantallas, interacciones) tal como se diseñó en el prototipo.
- `engine.js` — un pequeño motor de plantillas (sin React) que interpreta `template.html` contra el estado de `app-logic.js` y lo sincroniza con el DOM real.
- `dclogic.js` — la clase base que conecta `app-logic.js` con el motor.
- `app-bootstrap.js` — arranca todo al cargar la página.
- `assets/` — las 52 imágenes/íconos que usa la app.

## Probarlo en local

No hace falta `npm install` ni ningún build. Solo un servidor estático
simple (necesario porque `fetch('./template.html')` no funciona abriendo
el archivo directo con `file://`):

```bash
cd khaos-app   # o como hayas nombrado la carpeta
python3 -m http.server 8000
```

Y abrí `http://localhost:8000` en el navegador.

## Subir a GitHub (repo "Taller")

```bash
cd khaos-app
git init
git add .
git commit -m "Versión final de la app KHAOS (export standalone)"
git branch -M main
git remote add origin https://github.com/Garnicad/Taller.git
git push -u origin main
```

Si el repo `Taller` ya tiene contenido (por ejemplo un commit inicial
vacío desde GitHub), puede que el push sea rechazado; en ese caso:

```bash
git pull origin main --allow-unrelated-histories
# resolvé cualquier conflicto si aparece, luego:
git push -u origin main
```

## Vercel

Si `https://khaos-rho.vercel.app/` ya está conectado al repo
`Garnicad/Taller` (integración automática de Vercel con GitHub), el
`git push` de arriba va a disparar un redeploy solo, sin que tengas
que hacer nada más — en unos 30-60 segundos el sitio se actualiza.

Si no está conectado todavía: entrá a vercel.com → tu proyecto → Settings
→ Git, y conectá el repo `Garnicad/Taller`. Como es un sitio estático
puro (sin framework), dejá el "Build Command" vacío y el "Output
Directory" en `.` (la raíz) — Vercel lo sirve directo, sin build.
