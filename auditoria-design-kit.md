# Auditoría del design kit

Revisión de los 15 archivos HTML en `disenos/` (los estilos `<style>` y los atributos `style`). Se numeran las filas de corrido en todas las tablas (no se reinicia por categoría).

## 1. Colores

| n.º | elemento | versiones encontradas | dónde | tipo | propuesta |
|---|---|---|---|---|---|
| 1 | marino (texto/fondo principal) | `#031927` — 108 usos | fondo de tarjetas y texto en las 15 pantallas | intencional | `--color-marino` |
| 2 | gris claro (bordes/fondos neutros) | `#EEEEEE` — 78 usos | bordes de tarjetas, barras de progreso, divisores | intencional | `--color-gris-claro` |
| 3 | gris texto secundario | `#333333` — 53 usos | pies de foto, texto de apoyo | intencional | `--color-texto-suave` |
| 4 | blanco | `#FFFFFF` — 47 usos | fondo de pantallas de teléfono | intencional | `--color-blanco` |
| 5 | rojo óxido (marca) | `#BA1200` — 38 usos | acentos de error/alerta, chip "ANTES" | intencional | `--color-primario` |
| 6 | negro (marca) | `#0A0A0A` — 30 usos | bisel del teléfono, texto fuerte | intencional | `--color-negro` |
| 7 | blanco roto (marca) | `#F5F4F1` — 24 usos | fondo general de las pantallas | intencional | `--color-fondo` |
| 8 | hielo (marca) | `#C8E0F4` — 24 usos | chip "DESPUÉS", tarjetas de acierto | intencional | `--color-secundario-claro` |
| 9 | tinte de rojo (derivado) | `#F6DEDB` — 16 usos | fondo del chip "ANTES" | intencional (tinte del color 5) | `--color-primario-tinte` |
| 10 | gris medio (placeholders) | `#E5E5E5` — 16 usos | cajas de "foto"/mapa simuladas | intencional | `--color-gris-medio` |
| 11 | azul medio (marca) | `#508AA8` — 15 usos | botones y acentos secundarios | intencional | `--color-secundario` |
| 12 | gris texto apoyo | `#666666` — 14 usos | textos de apoyo cortos | intencional | `--color-texto-apoyo` |
| 13 | gris borde | `#CCCCCC` — 12 usos | bordes de botones outline | intencional | `--color-borde` |
| 14 | gris placeholder | `#999999` — 9 usos | texto de placeholder | intencional | `--color-texto-placeholder` |
| 15 | azul claro (marca) | `#9DD1F1` — 6 usos | eyebrows y etiquetas destacadas | intencional | `--color-secundario-vivo` |

No se encontraron colores casi iguales que nadie decidió a propósito (por ejemplo dos azules a un dígito hex de distancia): la paleta ya es la oficial de marca más una escala de grises consistente. No hay nada que unificar aquí.

## 2. Tipografía

| n.º | elemento | versiones encontradas | dónde | tipo | propuesta |
|---|---|---|---|---|---|
| 16 | familia de títulos | `'Archivo Black'` — 15 usos (una por pantalla) | todos los `<h2>` | intencional | `--fuente-titulos` |
| 17 | familia de texto | `'Space Grotesk'` — 15 usos (una por pantalla) | raíz de cada pantalla | intencional | `--fuente-texto` |
| 18 | texto micro | `9px` (9 usos) y `8px` (1 uso) | etiquetas de historias/skeletons vs. una etiqueta de "publicidad" en p5 | **accidental** | unificar a `9px` → `--texto-micro` |
| 19 | texto xs | `10px` — 12 usos | labels de navegación, stats | intencional | `--texto-xs` |
| 20 | texto pequeño | `11px` — 46 usos | eyebrows, chips, nav | intencional | `--texto-sm` |
| 21 | texto base chico | `12px` — 34 usos | pies de foto, texto de apoyo | intencional | `--texto-base` |
| 22 | texto base | `13px` — 83 usos (el más usado) | cuerpo general, botones, captions | intencional | `--texto-md` |
| 23 | texto destacado | `14px` — 23 usos | títulos de tarjeta, encabezados cortos | intencional | `--texto-lg` |
| 24 | título de tarjeta (modal) | `15px` (H5 "Confirmar suscripción") y `16px` (H5 "Actualizar a Pro") | ambas mitades de la misma pantalla H5 | **accidental** | unificar a `16px` → `--texto-xl` |
| 25 | título de error | `20px` (H9 "Error 400") | 1 uso | intencional (único rol: título de error) | `--texto-2xl` |
| 26 | glifo de ícono | `22px` (H9, el "!" dentro del círculo) | 1 uso | intencional (es un glifo, no texto de lectura) | `--texto-icono` |
| 27 | título de pantalla | `26px` — 15 usos (uno por pantalla) | todos los `<h2>` de encabezado | intencional | `--titulo` |

## 3. Espaciados

| n.º | elemento | versiones encontradas | dónde | tipo | propuesta |
|---|---|---|---|---|---|
| 28 | espacio ajustado | `6px`, `10px`, `14px`, `18px` (gap) | separaciones cortas dentro de tarjetas y chips | mezcla: `6/10/14` intencionales (26, 10 y 6 usos); `18px` (1 uso, en H8) es el único que no encaja | el `18px` es **accidental** → unificar a `16px` |
| 29 | espacio base | `4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 40px` (gap y padding) | el resto del sistema | intencional (múltiplos de 4) | escala `--espacio-1` (4px) a `--espacio-8` (32px), más `--espacio-10` (40px) |
| 30 | margen de pantalla | `48px 56px` — 15 usos (uno por pantalla) | padding raíz de cada pantalla | intencional | `--espacio-pantalla` |

## 4. Bordes y sombras

| n.º | elemento | versiones encontradas | dónde | tipo | propuesta |
|---|---|---|---|---|---|
| 31 | radio chico | `4px` — 19 usos | barras de progreso, bordes finos | intencional | `--radio-sm` |
| 32 | radio chip pequeño | `6px`, `8px` | etiquetas pequeñas | intencional (dos tamaños de chip) | `--radio-sm` / `--radio-md` |
| 33 | radio tarjeta | `10px`, `12px` | tarjetas y cajas de contenido | intencional | `--radio-md` / `--radio-lg` |
| 34 | radio chip grande | `14px` | chips de filtro, burbujas de ayuda | intencional | `--radio-lg` |
| 35 | radio píldora | `20px` | botones y chips tipo píldora | intencional | `--radio-pill` |
| 36 | radio pantalla interna | `26px` — 15 usos | esquina de la pantalla dentro del teléfono | intencional | `--radio-pantalla` |
| 37 | radio bisel del teléfono | `36px` — 15 usos | marco exterior del mockup de teléfono | intencional | `--radio-bisel` |

No hay sombras: ningún diseño usa `box-shadow`, así que no aplica esa parte de la auditoría.

## 5. Componentes que se repiten

| n.º | componente | en qué pantallas | versiones | diferencias |
|---|---|---|---|---|
| 38 | marco de teléfono (bisel + pantalla interna) | las 15 | 1 | ninguna — siempre 340×620 con el mismo radio |
| 39 | barra superior "KHAOS" | las 15 | 1 | ninguna |
| 40 | chip ANTES / DESPUÉS | las 15 (30 chips en total) | 2 variantes a propósito | intencional: rojo-tinte para ANTES, hielo para DESPUÉS |
| 41 | encabezado de pantalla (eyebrow + título) | las 15 | 1 | ninguna |
| 42 | pie de comparación (texto explicativo bajo cada teléfono) | las 15 (30 en total) | 1 | ninguna |
| 43 | botón tipo píldora | 10 pantallas | 1 | ninguna |
| 44 | tarjeta de contenido (fondo claro, radio 10-12px) | 12 pantallas | 1 | ninguna |

## Las 5 decisiones más importantes

1. Unificar `8px` → `9px` en el texto micro (un solo caso, en p5).
2. Unificar `15px` → `16px` en el título de tarjeta de H5 (las dos mitades de esa pantalla deberían verse iguales).
3. Unificar el `gap: 18px` de H8 → `16px`.
4. Confirmar los nombres de los tokens de color (ya están alineados a la paleta oficial de marca, solo falta ponerles nombre de variable).
5. Confirmar la escala tipográfica final (9 / 10 / 11 / 12 / 13 / 14 / 16 / 20 / 22 / 26 px) como la única permitida de aquí en adelante — evita que cada pantalla nueva invente un tamaño distinto.
