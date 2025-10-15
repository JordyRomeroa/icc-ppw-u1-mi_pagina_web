# Práctica: Estándares Web  
**Autor:** Jordy Romero  
**Asignatura:** Programación y Plataformas Web  
**Repositorio:** [icc-ppw-u1-mi_pagina_web](https://github.com/JordyRomeroa/icc-ppw-u1-mi_pagina_web)  
**Página desplegada:** [GitHub Pages](https://JordyRomeroa.github.io/icc-ppw-u1-mi_pagina_web/)  

---

## Estructura del proyecto
El proyecto incluye:

- `<!DOCTYPE html>`, `<html lang="es">`, `<head>`, `<body>`  
- Encabezado `<header>` con `<h1>` y `<h2>`  
- Secciones `<section>` con contenido temático  
- Tabla `<table>` con filas iniciales y fila dinámica agregada con JS  
- Footer `<footer>` con información del autor  
- Etiquetas nuevas: `<figure>` / `<figcaption>` y `<mark>`  

### Carpetas y archivos
icc-ppw-u1-mi_pagina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## Estilos CSS aplicados
| Elemento | Propiedades obligatorias | Propiedades exploradas |
|----------|------------------------|----------------------|
| body | background-color, font-family, margin | — |
| header | background-color, color, text-align, padding | text-shadow en h1 |
| h2 | color, border-bottom, padding-bottom | text-transform: uppercase |
| section | margin, padding, border-radius, box-shadow | efecto hover con scale |
| table | border-collapse, width | filas alternadas con color |
| th, td | border, padding, text-align | — |
| button | background-color, color, border-radius, cursor, :hover | animación hover con scale |
| progress | accent-color: #28a745; width: 100% | — |

---

## Interactividad JS
- Agregar fila dinámica a la tabla con botón  
- Cambiar color del título al pasar el mouse  
- Mostrar mensaje de bienvenida al cargar la página  

---

## Etiquetas nuevas exploradas
- `<figure>` / `<figcaption>` → Imagen con descripción  
- `<mark>` → Resalta texto importante  

---

## Capturas de pantalla sugeridas
1. **Versión HTML básica:** sin estilos ni JS aplicados  
2. **Versión con CSS:** resaltar colores, botones, tabla y barra de progreso  
3. **Versión con JS:** agregar fila dinámica y efecto de hover en título  

> Para tomar la captura con JS, abre la página en tu navegador y prueba:  
> - Pasar el mouse sobre el título (`h1`)  
> - Presionar el botón "Agregar fila" en la tabla  

---

**Diferenciación de tu proyecto:**  
- Color del botón (`#28a745`)  
- Hover con `scale` en botones y secciones  
- Mensaje de bienvenida personalizado  
