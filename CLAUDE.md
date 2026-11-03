## Qué es este proyecto

KHAOS: una app de moda que orienta de estilo y da comunidad sin comparar ni clasificar, para jóvenes que sienten presión social por cómo se ven o visten. Es el MVP de un equipo del curso Lenguajes Digitales 3. Más contexto en README.md.

## Documentos que debes leer antes de construir

- spec.md: qué se construye (flujo, datos y pantallas). Si no existe o algo no está ahí, pregunta antes de inventar.
- css/tokens.css y css/components.css: el design kit. componentes.html muestra todos los componentes.

## Tecnología (no cambiar sin preguntar)

- HTML, CSS y JavaScript puro. Sin frameworks ni librerías (nada de React, Vue, Tailwind ni TypeScript) y sin paso de compilación: todo debe funcionar abriendo los archivos en el navegador.
- La app se publicará en Vercel, conectada a este repositorio.
- Más adelante, la base de datos será Supabase. Por ahora, los datos son simulados.

## Estructura del proyecto

- disenos/: diseños originales. Solo de referencia: nunca los modifiques.
- assets/: todas las imágenes, logos e íconos de la app. Usa siempre las de aquí, nunca links de imágenes de internet.
- css/: estilos. tokens.css (decisiones base), components.css (componentes) y styles.css (estilos generales de las pantallas).
- js/: código. app.js (comportamiento) y data.js (datos simulados, separados del diseño).
- index.html: la pantalla de inicio, la puerta de entrada de la app. Las demás pantallas van en la carpeta pages/.
- Nombres de archivos y carpetas: minúsculas, sin tildes, ñ ni espacios, con guiones.

## Reglas de trabajo

1. Antes de crear o modificar archivos, explica tu plan en pocas líneas y espera aprobación.
2. Trabaja una pantalla o una función a la vez.
3. Usa solo los tokens y componentes del design kit. Si necesitas un estilo o componente que no existe, pregunta: primero se agrega al kit y a componentes.html, y después se usa.
4. Nunca escribas claves, contraseñas ni tokens de acceso en el código: este repositorio es público.
5. Si algo que te pedimos contradice spec.md, avísanos antes de hacerlo.
6. Al terminar cada tarea, explica en lenguaje simple qué cambiaste y por qué. Somos un equipo aprendiendo.
7. Antes de cada comando de git, explica en una frase qué hace.

## Componentes disponibles

Definidos en `css/components.css` (usan solo variables de `css/tokens.css`). Ver todos con ejemplos visuales en `componentes.html`.

- `.marco-telefono` + `.marco-telefono__pantalla`: el teléfono mockup completo. Uso: `<div class="marco-telefono"><div class="marco-telefono__pantalla">…</div></div>`.
- `.barra-superior`: barra de marca "KHAOS" arriba de cada pantalla. Uso: `<div class="barra-superior">KHAOS</div>`.
- `.chip`, `.chip--antes`, `.chip--despues`: etiqueta píldora para comparaciones. Uso: `<span class="chip chip--antes">Antes</span>`.
- `.encabezado-pantalla`, `.encabezado-pantalla__eyebrow`, `.encabezado-pantalla__titulo`: título de cada pantalla con su eyebrow. Uso: `<div class="encabezado-pantalla"><p class="encabezado-pantalla__eyebrow">Sección</p><h4 class="encabezado-pantalla__titulo">Título</h4></div>`.
- `.pie-comparacion`: texto explicativo bajo un mockup. Uso: `<p class="pie-comparacion">Texto…</p>`.
- `.boton`, `.boton--secundario`: botón píldora (tiene estados hover, focus-visible y disabled). Uso: `<button class="boton">Acción</button>`.
- `.tarjeta`, `.tarjeta__titulo`, `.tarjeta__texto`: tarjeta de contenido genérica. Uso: `<div class="tarjeta"><h4 class="tarjeta__titulo">Título</h4><p class="tarjeta__texto">Texto</p></div>`.
- `.barra-navegacion`, `.barra-navegacion__item`, `.barra-navegacion__item--activo`, `.barra-navegacion__icono`, `.barra-navegacion__etiqueta`: la barra de navegación inferior de 5 ítems (Inicio, Asesor, Closet, Comunidad, Perfil), igual en todas las pantallas. Marca el ítem activo con `--activo`. Uso: `<nav class="barra-navegacion"><a href="index.html" class="barra-navegacion__item barra-navegacion__item--activo"><span class="barra-navegacion__icono"></span><span class="barra-navegacion__etiqueta">Inicio</span></a>...</nav>`.

Si necesitas un componente o variante que no está aquí, no lo inventes directo en una pantalla: primero se agrega a `css/components.css` y a `componentes.html`, y después se usa (regla 3 de arriba).
