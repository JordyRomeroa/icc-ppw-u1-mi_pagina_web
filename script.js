document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Agregar nueva fila a la tabla
  const boton = document.getElementById("agregar-fila");
  const tabla = document.getElementById("tabla-elementos").querySelector("tbody");

  boton.addEventListener("click", () => {
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = "<td>&lt;footer&gt;</td><td>Define el pie de página.</td>";
    tabla.appendChild(nuevaFila);
  });

  // 2️⃣ Cambiar color del título al pasar el cursor
  const titulo = document.getElementById("titulo");
  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "#ff6600";
  });
  titulo.addEventListener("mouseout", () => {
    titulo.style.color = "white";
  });

  // 3️⃣ Acción personalizada: mensaje de bienvenida
  alert("¡Bienvenido a mi práctica de Estándares Web!");
});
