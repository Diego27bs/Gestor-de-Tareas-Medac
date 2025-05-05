// Función para mostrar las tareas en la página
async function mostrarTareas() {
  try {
    const response = await fetch("listar.php");
    // Se realiza una solicitud al servidor para obtener las tareas
    if (!response.ok) {
      throw new Error("Error al obtener las tareas"); // Manejo de errores si la respuesta no es correcta
    }

    // Si la respuesta es correcta, se convierte a JSON

    const tareas = await response.json(); // Convertir la respuesta a JSON

    const listarTareas = document.getElementById("listarTareas");
    listarTareas.innerHTML = ""; // Limpiar el contenedor de tareas

    if (tareas.length === 0) {
      listarTareas.innerHTML = "<p>No hay tareas disponibles.</p>";
      return;
    }

    tareas.forEach((tarea) => {
      const tareaDiv = document.createElement("div");
      tareaDiv.classList.add("tarea"); // Agregar clase para estilos

      // Crear elementos para mostrar la información de la tarea
      const titulo = document.createElement("h3");
      titulo.textContent = tarea.tareaTitulo;

      const descripcion = document.createElement("p");
      descripcion.innerHTML = `<strong>Descripción:</strong> ${tarea.tareaDescripcion}`;

      const proyecto = document.createElement("p");
      proyecto.innerHTML = `<strong>Proyecto:</strong> ${tarea.tareaProyecto}`;

      const vencimiento = document.createElement("p");
      vencimiento.innerHTML = `<strong>Vencimiento:</strong> ${tarea.tareaVencimiento}`;

      const recordatorio = document.createElement("p");
      recordatorio.innerHTML = `<strong>Recordatorio:</strong> ${tarea.tareaRecordatorio}`;

      tareaDiv.appendChild(titulo);
      tareaDiv.appendChild(descripcion);
      tareaDiv.appendChild(proyecto);
      tareaDiv.appendChild(vencimiento);
      tareaDiv.appendChild(recordatorio);

      listarTareas.appendChild(tareaDiv);
    });
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
  }
}
