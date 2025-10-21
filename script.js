// Mensaje al cargar la página
window.onload = function() {
    alert("¡Bienvenido a mi práctica de Estándares Web!");
};

// Cambiar color del título al pasar el mouse
const titulo = document.getElementById("titulo");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "#28a745";
});

titulo.addEventListener("mouseout", function() {
    titulo.style.color = "white";
});

// Agregar una nueva fila a la tabla
const boton = document.getElementById("agregarFila");
const tabla = document.getElementById("tablaElementos");

boton.addEventListener("click", function() {
    const nuevaFila = tabla.insertRow(-1);
    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    celda1.innerHTML = "&lt;article&gt;";
    celda2.innerHTML = "Sección de contenido independiente en la página";
});
