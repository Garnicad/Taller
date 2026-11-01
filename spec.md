# spec.md — KHAOS

Blueprint de lo que se va a construir: el flujo, los datos y cada pantalla. Basado en los 15 diseños de `disenos/`, en `storytelling-pitch-khaos.md` y `analisis-figma-khaos.md` del proyecto. Donde el material no dice algo con claridad, queda marcado como `[POR DECIDIR]` en vez de inventarlo.

## Flujo

La barra de navegación inferior es la misma en toda la app (ver `h4-consistencia-estandares.html`): **Inicio, Asesor, Closet, Comunidad, Perfil**, siempre en ese orden y con los mismos íconos. El texto de ese diseño dice que esa barra se repite "en las 6 pantallas de la app", pero solo muestra 5 íconos — cuál es la sexta pantalla de navegación principal no está identificado en el material. `[POR DECIDIR]`

Desde esas 5 pantallas de navegación se llega al resto:

- **Asesor** → el resultado del análisis puede llevar a **Probador** para probarse la prenda recomendada. El punto exacto de ese enlace no está documentado. `[POR DECIDIR]`
- **Closet** → búsqueda y filtros (`h6-reconocer-recordar.html`).
- **Comunidad** → **Publicaciones** (`p2`), **"Lugar seguro"** (`p3`) y canales fijados (`h7`). No está documentado si **Inspírate de ropa** (`p5`) es una pestaña dentro de Comunidad o una pantalla independiente. `[POR DECIDIR]`
- **Perfil** → **Membresía** (`h5`) y la vista "Identidad sin descubrir" (`h8`).
- **Ayuda** (`h10`) aparece de forma contextual junto a la duda (ej. durante el análisis del Asesor), no como ícono de navegación directo.
- **Artículos — Historias** (`p1`) y **Donar ropa — mapa** (`p4`): el material no especifica desde qué pantalla se entra a estas dos. `[POR DECIDIR]`

Nota: `storytelling-pitch-khaos.md` describe 9 secciones de la app (Home, Asesor, My Closet, Probador, Comunidad, Artículos, Membresía, Perfil, Ayuda) como el recorrido narrativo del pitch, que no es lo mismo que la barra de navegación de 5 íconos vista arriba. Antes de construir, el equipo debería confirmar si esas 9 secciones son pantallas de nivel superior o si varias viven dentro de otra (como Membresía dentro de Perfil). `[POR DECIDIR]`

## Datos

Por ahora toda la app usa datos simulados — así lo dice `CLAUDE.md` ("por ahora, los datos son simulados"; Supabase se conecta más adelante). Lo que existe en el material:

- **Foto del usuario** (Asesor, Probador): el usuario la sube con permiso explícito; el diseño aclara que no queda guardada. Hoy: no hay almacenamiento real.
- **Closet**: 33 prendas de ejemplo, organizadas por uso real (ej. "usado 7 veces"), con filtros "Usado reciente / Favoritos / Por color / Todo" (`h6`). Hoy: lista fija simulada.
- **Historias / Artículos**: curados de medios como Vogue, GQ y Dazed, mostrados como miniaturas tipo historia (`p1`). Hoy: contenido simulado, no hay fuente editorial conectada.
- **Publicaciones de Comunidad**: texto, canal destino y visibilidad ("Visible para la comunidad · sin tu nombre destacado") (`p2`). Hoy: simuladas, sin autenticación real de autoría.
- **Canales de Comunidad**: lista de canales (`#thrift`, `#sneakers`, `#looks`, `#retos`, etc.), con la opción de fijar los propios (`h7`). Hoy: lista fija simulada.
- **"Lugar seguro"**: reglas de la comunidad (sin seguidores, sin likes públicos, nombre real opcional, reporte en un toque) (`p3`). Hoy: texto fijo, el botón de reporte no está conectado a nada todavía.
- **Puntos de donación**: dirección, si está abierto, distancia y horario (`p4`). Hoy: datos de ejemplo, sin mapa ni geolocalización real conectados.
- **Membresía**: planes con precio (ej. Pro anual $119.900 COP/año, 33% de ahorro vs. mensual) (`h5`). Hoy: pantalla de confirmación simulada, sin pasarela de pago real.
- **Perfil**: prendas totales y fecha de miembro ("33 prendas · miembro desde 2024") (`h8`).

**Integraciones de backend** (base de datos real, mapa con geolocalización, pasarela de pago, analizador de fotos): el homework original pide tomarlas de la "intro a backend", un documento que no está en este repositorio ni en el proyecto de Claude. No se inventan aquí — quedan como `[POR DECIDIR]` hasta que el equipo las defina.

## Pantallas

### 1. Asesor — mientras analiza la foto

**Archivo de diseño:** `disenos/h1-estado-sistema-visible.html`

**Objetivo:** Esta pantalla existe para que la persona que sube su foto pueda saber en todo momento qué está pasando mientras el Asesor la analiza. Sabemos que funciona si nadie se pregunta si la app se congeló o cuánto falta.

**Contenido:** Barra de progreso con paso actual ("Paso 2 de 3 · Detectando prendas") y un aviso de tiempo estimado ("Esto toma unos 10 segundos · no cierres la app").

**Qué funciona de verdad:** Real: la barra de progreso y el texto de paso actual, como interacción visual. Simulado: el análisis en sí — no hay un motor que detecte prendas todavía. Después: conectar esta barra al resultado real del análisis de foto. `[POR DECIDIR]` qué tecnología hace ese análisis.

**Está lista cuando:** el estado "después" de este diseño está construido en `pages/` usando `.barra-superior` y los tokens de espaciado del design kit, y se ve igual al comparar con `disenos/h1-estado-sistema-visible.html`.

### 2. Asesor — resultado de compatibilidad

**Archivo de diseño:** `disenos/h2-lenguaje-mundo-real.html`

**Objetivo:** Esta pantalla existe para que la persona entienda por qué una prenda le funciona, sin tener que descifrar términos técnicos. Sabemos que funciona si alguien sin conocimiento de moda ni de producto entiende el resultado a la primera lectura.

**Contenido:** Mensaje en lenguaje cotidiano ("Esto combina muy bien con tu estilo · Porque usas mucho azul y esta prenda es azul claro") en vez de puntuaciones técnicas (score, SKU, confidence).

**Qué funciona de verdad:** Real: el formato de la explicación en texto simple. Simulado: la lógica de compatibilidad detrás del mensaje — hoy es un texto de ejemplo, no un cálculo real. Después: generar este texto a partir del análisis real de la foto y del Closet de la persona.

**Está lista cuando:** la pantalla muestra siempre una explicación en lenguaje cotidiano (nunca un dato técnico crudo) y usa `.tarjeta` del design kit para presentarla.

### 3. Probador

**Archivo de diseño:** `disenos/h3-control-libertad.html`

**Objetivo:** Esta pantalla existe para que la persona que se está probando una prenda pueda salir, deshacer o guardar en cualquier momento, sin quedar atrapada. Sabemos que funciona si nadie necesita cerrar la app a la fuerza para salir del Probador.

**Contenido:** Botones siempre visibles de "Cancelar", "Guardar look" y "↺ Deshacer última prenda", sobre la foto de la persona con la prenda superpuesta.

**Qué funciona de verdad:** Real: los tres controles (cancelar, guardar, deshacer) como interacción de interfaz. Simulado: la superposición de la prenda sobre la foto — hoy no hay un motor de prueba virtual real. Después: conectar con el análisis de foto del Asesor para la superposición real. `[POR DECIDIR]` qué tecnología hace esa superposición.

**Está lista cuando:** los tres controles están siempre visibles en pantalla, sin necesitar scroll ni menú adicional para encontrarlos.

### 4. Barra de navegación (consistencia entre pantallas)

**Archivo de diseño:** `disenos/h4-consistencia-estandares.html`

**Objetivo:** Esta regla existe para que la persona que navega la app pueda reconocer siempre la misma barra, con el mismo orden e íconos, en vez de reaprenderla en cada pantalla. Sabemos que funciona si la barra inferior es visualmente idéntica en Inicio, Asesor, Closet, Comunidad y Perfil.

**Contenido:** Barra inferior fija con 5 íconos en el mismo orden: Inicio, Asesor, Closet, Comunidad, Perfil.

**Qué funciona de verdad:** Real: una vez construida en `css/components.css`, esta barra se puede reutilizar igual en cada pantalla. Simulado: no aplica (es un componente de navegación, no un dato). Después: no aplica.

**Está lista cuando:** la barra existe como un solo componente del design kit (no copiada y pegada distinta en cada página) y aparece igual en todas las pantallas de navegación principal.

### 5. Membresía — confirmación de pago

**Archivo de diseño:** `disenos/h5-prevencion-errores.html`

**Objetivo:** Esta pantalla existe para que la persona que va a pagar una membresía pueda ver un resumen y confirmar antes de que se le cobre. Sabemos que funciona si nadie paga sin querer con un solo toque accidental.

**Contenido:** Resumen del plan (Pro anual, $119.900 COP/año, 33% de ahorro vs. mensual) con botones "Cancelar" y "Confirmar pago" separados del botón que inicia la compra.

**Qué funciona de verdad:** Real: el paso de confirmación como flujo de interfaz. Simulado: el cobro en sí — no hay pasarela de pago conectada. Después: conectar con una pasarela de pago real. `[POR DECIDIR]` cuál.

**Está lista cuando:** nunca es posible pagar con un solo toque: siempre hay un paso de resumen + confirmación antes de cualquier cobro, simulado o real.

### 6. Closet

**Archivo de diseño:** `disenos/h6-reconocer-recordar.html`

**Objetivo:** Esta pantalla existe para que la persona encuentre una prenda entre las suyas con la vista, sin tener que recordar su nombre exacto. Sabemos que funciona si alguien encuentra una prenda específica sin escribir texto de búsqueda.

**Contenido:** Chips de filtro ("Usado reciente", "Favoritos", "Por color", "Todo (33)") sobre una cuadrícula visual de las 33 prendas.

**Qué funciona de verdad:** Real: los chips de filtro y la cuadrícula, como interacción. Simulado: las 33 prendas y sus datos de uso ("usado 7 veces") — son de ejemplo, no vienen de compras reales de la persona. Después: conectar el Closet a las prendas reales asociadas a la cuenta.

**Está lista cuando:** se puede filtrar la cuadrícula por cada chip y el resultado se ve correctamente con las prendas de ejemplo.

### 7. Comunidad — canales

**Archivo de diseño:** `disenos/h7-flexibilidad-eficiencia.html`

**Objetivo:** Esta pantalla existe para que una persona que usa seguido los mismos canales pueda llegar a ellos en un toque, en vez de bajar por una lista plana igual para todos. Sabemos que funciona si un usuario frecuente de un canal lo encuentra arriba, sin desplazarse.

**Contenido:** Sección "Tus canales fijados" (con 📌) arriba, y "Todos los canales" debajo.

**Qué funciona de verdad:** Real: la función de fijar canales, como interacción. Simulado: la lista de canales y cuáles están fijados — son datos de ejemplo. Después: guardar los canales fijados por cuenta real.

**Está lista cuando:** se puede fijar y desfijar un canal, y los fijados siempre aparecen arriba de "Todos los canales".

### 8. Perfil

**Archivo de diseño:** `disenos/h8-diseno-minimalista.html`

**Objetivo:** Esta pantalla existe para que la persona vea su identidad en KHAOS sin que insignias y contadores compitan por su atención. Sabemos que funciona si la primera mirada muestra una sola idea clara, no una lista de métricas.

**Contenido:** "IDENTIDAD SIN DESCUBRIR", un dato de resumen ("33 prendas · miembro desde 2024") y el botón "Editar perfil"; el resto vive en submenús.

**Qué funciona de verdad:** Real: la estructura de una idea por pantalla. Simulado: el conteo de prendas y la fecha de miembro — datos de ejemplo. Después: mostrar el conteo real de la cuenta.

**Está lista cuando:** la pantalla principal del Perfil no muestra más de un dato numérico de resumen a la vez.

### 9. Asesor — cuando no detecta el rostro

**Archivo de diseño:** `disenos/h9-recuperarse-errores.html`

**Objetivo:** Esta pantalla existe para que la persona a la que el Asesor no le detecta el rostro entienda qué pasó y cómo corregirlo. Sabemos que funciona si nadie se queda atascado en un error sin saber qué hacer después.

**Contenido:** Mensaje en lenguaje humano ("No pudimos detectar tu rostro con claridad"), sugerencias concretas ("Busca un lugar con más luz", "Quítate lentes o accesorios que cubran tu cara") y un botón "Reintentar".

**Qué funciona de verdad:** Real: el formato del mensaje de error y el botón de reintentar. Simulado: la detección de rostro en sí. Después: conectar con el motor real de detección y sus posibles códigos de error. `[POR DECIDIR]` cuáles son esos códigos.

**Está lista cuando:** ningún error del Asesor se muestra como código técnico crudo: siempre hay explicación + sugerencia + salida.

### 10. Ayuda contextual

**Archivo de diseño:** `disenos/h10-ayuda-documentacion.html`

**Objetivo:** Esta pantalla existe para que la persona resuelva una duda en el momento en que surge, sin salir de la pantalla donde está. Sabemos que funciona si la ayuda aparece junto a la acción, no en un documento aparte.

**Contenido:** Un tip corto en el momento justo (ej. "💡 Tip: usa buena luz para mejores resultados" durante el análisis del Asesor) con un enlace "Ver más en Ayuda →" para quien necesite más detalle.

**Qué funciona de verdad:** Real: el formato de tip contextual + enlace a más ayuda. Simulado: el contenido de ayuda detrás del enlace — todavía no está escrito. Después: escribir el contenido completo de Ayuda.

**Está lista cuando:** cada pantalla sensible (Asesor, Probador) tiene al menos un tip contextual relevante a lo que está haciendo la persona en ese momento.

### 11. Artículos — Historias

**Archivo de diseño:** `disenos/p1-articulos-historias.html`

**Objetivo:** Esta pantalla existe para que la persona reconozca de qué trata una historia de un vistazo, sin leer título por título. Sabemos que funciona si alguien identifica el tema de una historia antes de abrirla, solo con la miniatura.

**Contenido:** Miniaturas tipo "historia" (como Instagram o Vogue) por tema (Techwear, Streetwear, Dazed, GQ) con vista previa al abrir.

**Qué funciona de verdad:** Real: el formato de miniatura + vista previa, como interacción. Simulado: el contenido editorial detrás de cada historia — son ejemplos. Después: conectar con una fuente real de contenido curado. `[POR DECIDIR]` cuál.

**Está lista cuando:** cada miniatura se puede abrir y muestra una vista previa antes del contenido completo.

### 12. Comunidad — Publicaciones

**Archivo de diseño:** `disenos/p2-publicaciones.html`

**Objetivo:** Esta pantalla existe para que la persona que va a publicar en Comunidad sepa en qué canal queda y quién la va a ver antes de publicar. Sabemos que funciona si nadie publica por error en el canal equivocado.

**Contenido:** Antes de publicar, muestra el canal destino ("Se publicará en #thrift") y el alcance ("Visible para la comunidad · sin tu nombre destacado"), con "Cancelar" y "Publicar" como pasos separados.

**Qué funciona de verdad:** Real: el paso de confirmación antes de publicar. Simulado: el guardado real de la publicación — hoy no persiste. Después: conectar con el almacenamiento real de publicaciones.

**Está lista cuando:** nunca se puede publicar sin ver antes el canal y el alcance de la publicación.

### 13. Comunidad — "¿Cómo es un lugar seguro KHAOS?"

**Archivo de diseño:** `disenos/p3-lugar-seguro.html`

**Objetivo:** Esta pantalla existe para que la persona entienda, sin leer un documento legal, qué hace seguro al espacio de Comunidad. Sabemos que funciona si alguien puede explicar con sus propias palabras las reglas después de leerla, sin releer dos veces.

**Contenido:** Reglas en tarjetas cortas y lenguaje cotidiano: "Sin seguidores. Sin likes públicos.", "Nadie ve tu nombre real si no quieres.", "Reportas algo en un toque."

**Qué funciona de verdad:** Real: el formato de tarjetas cortas. Simulado: el botón de reporte — hoy no está conectado a un sistema de moderación real. Después: conectar el reporte a un proceso de moderación real. `[POR DECIDIR]` cómo funciona ese proceso.

**Está lista cuando:** las reglas se leen completas sin necesitar scroll largo ni un documento aparte.

### 14. Donar ropa — mapa de puntos

**Archivo de diseño:** `disenos/p4-donar-ropa-mapa.html`

**Objetivo:** Esta pantalla existe para que la persona que quiere donar ropa sepa qué punto está abierto y qué tan cerca le queda, antes de ir. Sabemos que funciona si alguien elige un punto de donación sin tener que llamar o buscar el horario por fuera de la app.

**Contenido:** Estado de búsqueda ("Buscando puntos cerca de ti…"), marcadores en un mapa y una tarjeta por punto con dirección, si está abierto, distancia y horario de cierre.

**Qué funciona de verdad:** Real: el formato de la tarjeta de punto (dirección + estado + distancia + horario). Simulado: la ubicación de la persona, el mapa y los puntos — son de ejemplo, no hay geolocalización ni mapa real conectados todavía. Después: conectar con un servicio de mapas real y con una lista real de puntos de donación. `[POR DECIDIR]` cuál proveedor de mapas y quién mantiene la lista de puntos.

**Está lista cuando:** cada punto mostrado indica siempre si está abierto, qué tan lejos queda y hasta qué hora.

### 15. Inspírate de ropa

**Archivo de diseño:** `disenos/p5-inspirate-ropa.html`

**Objetivo:** Esta pantalla existe para que la persona vea la prenda como contenido principal, sin que tags, contadores y publicidad le tapen la foto. Sabemos que funciona si la prenda es lo primero y lo más grande que se ve en la pantalla.

**Contenido:** Foto a pantalla completa con una sola etiqueta visible (ej. "#capsula"), sin contadores de likes/comentarios ni banners de publicidad.

**Qué funciona de verdad:** Real: el formato de foto a pantalla completa + una sola etiqueta. Simulado: el origen de las fotos — son de ejemplo. Después: conectar con un catálogo real de prendas o publicaciones. No está documentado si esta pantalla es parte de Comunidad o independiente. `[POR DECIDIR]`

**Está lista cuando:** nunca aparece más de una etiqueta sobre la foto, y no hay publicidad ni contadores compitiendo con la imagen.
