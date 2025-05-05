document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalTarea");
    const botonAbrirModal = document.getElementById("abrirModal");
    const botonCerrarModal = document.getElementById("cerrarModal");
    const formularioTarea = document.getElementById("formularioTarea");

    //Cuando damos click en 'añadir nueva tarea' el modal se hace visible
    botonAbrirModal.addEventListener("click", () => {
        modal.classList.remove("opacity-0", "pointer-events-none");
        modal.classList.add("opacity-100", "pointer-events-auto");
    });
    //cuando se hace click en 'cancelar' el modal se oculta
    botonCerrarModal.addEventListener("click", () => {
        modal.classList.remove("opacity-100", "pointer-events-auto");
        modal.classList.add("opacity-0", "pointer-events-none");
    });


    // Envio formulario con fetch()
    formularioTarea.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Creo objeto con los valores del formulario
        const data = {
            titulo: document.getElementById("nombreTarea").value,
            descripcion: document.getElementById("descripcionTarea").value,
            proyecto_id: document.getElementById("proyectoTarea").value,
            fecha_entrega: document.getElementById("vencimientoTarea").value,
            estado: "pendiente" // Estado por defecto
        };
        //envio datos al servidor
        try {
            const response = await fetch("/api/tareas/crear_tareas.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            //si la respuesta es ok se crea la tarea, sino se alerta al usuario
            const result = await response.json();

            if (result.status === "ok") {
                alert("Tu tarea ha sido creada");
                window.location.href = "../templates/panel-usuario.html";
            } else {
                alert("Error al crear la tarea. Intenta de nuevo");
            }
        } catch (error) {
            alert("Error del servidor. Intenta mas tarde.");
            console.error("Error:", error);
        }
    });
});
