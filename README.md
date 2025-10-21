# Práctica: Estándares Web  
**Autor:** Jordy Romero  
**Asignatura:** Programación para la Web  
**Repositorio:** icc-ppw-u1-mi_pagina_web  
**Página desplegada:** [https://JordyRomeroa.github.io/icc-ppw-u1-mi_pagina_web/](https://JordyRomeroa.github.io/icc-ppw-u1-mi_pagina_web/)  
**Repositorio:** https://github.com/JordyRomeroa/icc-ppw-u1-mi_pagina_web.git
---

## Estructura del proyecto
El proyecto implementa una página web desarrollada con los estándares HTML5, CSS3 y JavaScript, cumpliendo todos los requerimientos de la práctica.  

### Componentes utilizados
- `<!DOCTYPE html>`, `<html lang="es">`, `<head>`, `<body>`  
- `<header>` con `<h1>` y `<h2>`  
- Dos secciones `<section>`  
- Tabla `<table>` con tres filas y fila dinámica agregada con JavaScript  
- Footer `<footer>` con información del autor  
- Etiquetas nuevas: `<figure>` / `<figcaption>` y `<progress>`  

### Estructura de archivos
icc-ppw-u1-mi_pagina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## Propiedades CSS aplicadas
| Elemento | Propiedades obligatorias | Propiedades exploradas |
|----------|------------------------|----------------------|
| body | background-color, font-family, margin | — |
| header | background-color, color, text-align, padding | text-shadow en h1 |
| h2 | color, border-bottom, padding-bottom | text-transform: uppercase |
| section | margin, padding, border-radius, box-shadow | efecto hover con scale |
| table | border-collapse, width | filas alternadas con color |
| th, td | border, padding, text-align | — |
| button | background-color, color, border-radius, cursor, :hover | transición suave (transition) |
| progress | accent-color: #28a745; width: 100% | — |

---

## Funciones JavaScript
El archivo `script.js` añade interactividad a la página mediante tres eventos:

1. Agregar fila dinámica: al hacer clic en el botón “Agregar fila”, se inserta una nueva fila en la tabla.  
2. Cambio de color en el título: el `<h1>` cambia de color cuando el usuario pasa el cursor por encima.  
3. Mensaje de bienvenida: al cargar la página, se muestra un mensaje con `alert()` saludando al usuario.  

---

## Etiquetas nuevas exploradas
1. `<figure>` / `<figcaption>` → Muestra una imagen acompañada de una descripción o pie de figura.  
2. `<progress>` → Representa una barra de progreso visual que indica el porcentaje completado de una tarea.  

---

## Capturas de pantalla
1. Estructura HTML básica sin estilos.  
2. Página con estilos CSS aplicados.  
3. Página interactiva con eventos JavaScript.  

---

## Conclusión
Este proyecto cumple con todos los criterios solicitados en la práctica “Explorando los Estándares Web con HTML, CSS y JavaScript”, incluyendo:

- Uso correcto de etiquetas semánticas HTML5.  
- Aplicación de estilos CSS obligatorios y dos propiedades nuevas.  
- Interactividad con tres eventos JavaScript.  
- Publicación exitosa en GitHub Pages.  
