# pantallas.md — Mapa de avance

Roadmap de construcción de KHAOS, por tramos del flujo (ver `spec.md`). Cada fila es una pantalla real de la app. `Inicio` no tiene archivo en `disenos/`: se construye con el contenido de Home documentado en `storytelling-pitch-khaos.md` ("Define no one.", sin cuestionario de identidad al entrar), que es el único material no inventado disponible para esa pantalla.

Nota sobre el método: por la falta de diseños de pantalla completos en `disenos/` (son comparaciones antes/después de un elemento puntual, no pantallas enteras — ver conversación del repo), cada pantalla se construye directamente con el design kit, usando el estado "DESPUÉS" de su diseño de heurísticas como el contenido ya aprobado para esa pantalla. Por eso "Separada" y "Con kit" se marcan juntas: no hay paso mecánico intermedio.

Dos pantallas de `disenos/` no tienen fila propia: `h4-consistencia-estandares.html` se convirtió en el componente compartido `.barra-navegacion` (en todas las pantallas), y `h10-ayuda-documentacion.html` se usa como contenido contextual dentro de la pantalla donde aplica (hoy, Asesor-cargando).

## Tramo 1 · Usar el Asesor

| Pantalla | Archivo | Separada | Con kit | Datos en data.js | Revisada vs spec |
|---|---|---|---|---|---|
| Inicio | index.html | ✅ | ✅ | ✅ | ⬜ |
| Asesor · analizando | pages/asesor-cargando.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Asesor · resultado | pages/asesor-resultado.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Asesor · error | pages/asesor-error.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Probador | pages/probador.html | ⬜ | ⬜ | ⬜ | ⬜ |

## Tramo 2 · Mi Closet

| Pantalla | Archivo | Separada | Con kit | Datos en data.js | Revisada vs spec |
|---|---|---|---|---|---|
| Closet | pages/closet.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Donar ropa · mapa | pages/donar-ropa.html | ⬜ | ⬜ | ⬜ | ⬜ |

## Tramo 3 · Comunidad

| Pantalla | Archivo | Separada | Con kit | Datos en data.js | Revisada vs spec |
|---|---|---|---|---|---|
| Comunidad · canales | pages/comunidad.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Comunidad · publicaciones | pages/comunidad-publicaciones.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Comunidad · lugar seguro | pages/comunidad-lugar-seguro.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Comunidad · inspírate | pages/comunidad-inspirate.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Comunidad · artículos | pages/comunidad-articulos.html | ⬜ | ⬜ | ⬜ | ⬜ |

## Tramo 4 · Perfil

| Pantalla | Archivo | Separada | Con kit | Datos en data.js | Revisada vs spec |
|---|---|---|---|---|---|
| Perfil | pages/perfil.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Membresía | pages/membresia.html | ⬜ | ⬜ | ⬜ | ⬜ |

**Para el equipo:** siempre saben qué sigue: la primera fila sin ✅ en "Con kit".
**Para Claude:** se actualiza al terminar cada pantalla.
**Para otro computador:** el avance vive en el repo, no en la memoria de nadie.
