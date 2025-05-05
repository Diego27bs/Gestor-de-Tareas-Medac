//LOGIN DE USUARIO
document.getElementById("formulario").addEventListener("input", validarFormulario); //Se obtiene el formulario y se agrega un evento para cuando se envie el formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    //Se obtiene el formulario y se agrega un evento para cuando se envie el formulario
    event.preventDefault(); //Prevenimos que el formulario se envie por defecto

    //Funcion para validar los campos del formulario
    let valido = validarFormulario();
    if (!valido) return; //Si no es valido el formulario no se envia
    //Se obtienen los valores de los inputs
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //Se crea un objeto con los valores de los inputs
    let data= {
      email: email,
      password: password
    };

    //Se envia la informacion al servidor
    fetch("login.php", {
      method: "POST", //Se envia la informacion por el metodo POST
      headers: {
        "Content-Type": "application/json", //Especificamos que el contenido es de tipo JSON
      },
      body: JSON.stringify(data), //Se convierte el objeto data en un JSON = {email: email, password: password} a una cadena JSON usando el stringify
    })
      .then((response) => response.json()) // Convierte la respuesta del servidor de JSON en un objeto JavaScript
      .then((data) => {
        if (data.status === "ok") {
          //Si la respuesta del servidor es "ok" se redirige a la pagina principal
          alert("Inicio de sesión correcto");
          window.location.href = ""; //Redirige a la pagina con el dashboard y los elementos que tenga dicha pagina
        } else {
          //Si la respuesta del servidor es "error" se muestra un mensaje de error
          alert("Credenciales Incorrectas");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error en el servidor. Inténtalo más tarde.");
      });
  });

function validarFormulario() {
  let valido = true; //Variable que indica si el formulario es valido o no
  let email = document.getElementById("email").value.trim();
  let errorEmail = document.getElementById("errorEmail");
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/; //Validamos si el correo es valido con una expresion regular indicando que los numeros del final pueden ser de 2 a 3 (.es/.com/. etc..) caracteres de dominio superior

  //Validamos el correo si cumple con la expresion regular y si no esta vacio
  if (email === "") {
    errorEmail.textContent = "El correo electrónico no puede estar vacío";
    valido = false;
  } else if (!emailPattern.test(email)) {
    errorEmail.textContent = "Por favor, introduce un correo electrónico válido";
    valido = false;
  } else {
    errorEmail.textContent = "";
  }

  let password = document.getElementById("password").value.trim();
  let errorPassword = document.getElementById("errorPassword");

  // Validamos si la contraseña no está vacía e indicamos la validacion para que la contraseña deba tener al menos 8 caracteres
  if (password === "") {
    errorPassword.textContent = "La contraseña no puede estar vacía";
    valido = false;
  } else if (password.length < 8) {
    errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
    valido = false;
  } else {
    errorPassword.textContent = "";
  }
  //Se deshabilita el boton de login si no se cumple con las validaciones
  document.getElementById("botonLogin").disabled = !valido;

  return valido;
}
//Mensaje de error o exito en el login
function mensaje() {
    let mensaje = document.getElementById("mensaje"); //Se obtiene el elemento del DOM con el id mensaje
    let email = document.getElementById("email").value.trim(); //Se obtiene el valor del input email
    let password = document.getElementById("password").value.trim(); //Se obtiene el valor del input password
  if (email !== "" && password.length >= 8) {
    mensaje.textContent = "Inicio de sesión correcto";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos";
    mensaje.style.color = "red";
  }
  setTimeout(() => {
    mensaje.textContent = "";
  }, 3000); //Se elimina el mensaje de error o exito en 3 segundos
}

