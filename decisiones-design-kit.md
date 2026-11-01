# Decisiones del design kit

Decisiones tomadas sobre `auditoria-design-kit.md`. Se aprobaron todas las propuestas de la auditoría tal cual, incluidas las 3 unificaciones marcadas como accidentales.

## Colores

- `--color-primario: #BA1200` — rojo óxido de marca, para alertas, errores y el chip "ANTES".
- `--color-primario-tinte: #F6DEDB` — tinte del primario, fondo suave del chip "ANTES".
- `--color-secundario: #508AA8` — azul medio de marca, botones y acentos de acción.
- `--color-secundario-vivo: #9DD1F1` — azul claro de marca, eyebrows y etiquetas destacadas.
- `--color-secundario-claro: #C8E0F4` — hielo de marca, chip "DESPUÉS" y tarjetas de acierto.
- `--color-marino: #031927` — marino casi negro, texto principal y fondos de tarjeta.
- `--color-negro: #0A0A0A` — negro de marca, bisel del teléfono y texto fuerte.
- `--color-fondo: #F5F4F1` — blanco roto, fondo general de cada pantalla.
- `--color-blanco: #FFFFFF` — blanco puro, fondo de la pantalla de teléfono.
- `--color-gris-claro: #EEEEEE`, `--color-gris-medio: #E5E5E5`, `--color-borde: #CCCCCC` — escala de grises para bordes y placeholders.
- `--color-texto-suave: #333333`, `--color-texto-apoyo: #666666`, `--color-texto-placeholder: #999999` — escala de grises para texto secundario.

## Tipografía

- `--fuente-titulos: 'Archivo Black'` — todos los encabezados.
- `--fuente-texto: 'Space Grotesk'` — todo el resto del texto.
- Escala final: `--texto-micro: 9px`, `--texto-xs: 10px`, `--texto-sm: 11px`, `--texto-base: 12px`, `--texto-md: 13px`, `--texto-lg: 14px`, `--texto-xl: 16px`, `--texto-2xl: 20px`, `--texto-icono: 22px`, `--titulo: 26px`.
- Se unificó el `8px` suelto de p5 a `9px` (texto micro): era el mismo rol que los demás textos de esa escala, solo que un archivo se desvió un píxel.
- Se unificó el `15px`/`16px` de H5 a `16px`: las dos mitades de esa comparación (antes/después) deberían usar el mismo tamaño de título de tarjeta.

## Espaciados

- Escala base en múltiplos de 4: `--espacio-1: 4px` … `--espacio-8: 32px`, más `--espacio-10: 40px`.
- Escala ajustada para separaciones cortas: `6px`, `10px`, `14px` (se mantienen, están bien usadas y repetidas).
- Se unificó el `gap: 18px` de H8 a `16px`: era el único valor que no encajaba en ninguna de las dos escalas.
- `--espacio-pantalla: 48px 56px` — padding raíz de cada pantalla.

## Bordes y sombras

- `--radio-sm: 4px`–`8px`, `--radio-md: 10px`–`12px`, `--radio-lg: 14px`, `--radio-pill: 20px`, `--radio-pantalla: 26px`, `--radio-bisel: 36px`.
- No hay sombras en ningún diseño actual, así que no se define ningún token de sombra todavía.

## Componentes

- Marco de teléfono, barra superior "KHAOS", encabezado de pantalla (eyebrow + título), chip ANTES/DESPUÉS, pie de comparación, botón píldora y tarjeta de contenido quedan como los 7 componentes oficiales del kit — se usaron siempre igual en las 15 pantallas, sin variantes accidentales.
