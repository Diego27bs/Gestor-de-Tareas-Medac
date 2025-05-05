<?php

// Endpoint para iniciar sesión

session_start(); //Inicio de sesión para poder trabajar conn ella

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); //Cambiar * por dominio concreto si es necesario
header('Access-Control-Allow-Methods: POST');

require "validar.php"; //Fichero con la función validarCredenciales().

//Función que prepara el mensaje JSON
function respuesta($status, $mensaje, $data = [])
{
    echo json_encode(array_merge(["status" => $status, "mensaje" => $mensaje], $data));
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") { //Comprueba que el método de envío sea POST

    $data = json_decode(file_get_contents("php://input"), true); //Recibe los datos JSON y los vuelve un array.

    if (!isset($data["email"]) || !isset($data["password"])) { //Comprueba si email y contraseña han sido introducidos.

        respuesta("error", "Falta de credenciales");
    }

    $email = filter_var($data["email"], FILTER_SANITIZE_EMAIL); //Eliminación de caracteres no deseados en el email
    
    if (strlen($data["password"]) < 8) { //Comprobaciones de formato de email y contraseña
        respuesta("error", "La contraseña debe tener al menos 8 caracteres");
    }

    if (!filter_var($data["email"], FILTER_VALIDATE_EMAIL)) { //Validación de formato email
        respuesta("error", "Correo electrónico inválido");
    }
    
    $password = $data["password"];

    // Validación de credenciales con la base de datos

    $resultado = validarCredenciales($email, $password);

    if ($resultado["status"] === "ok") {
      $_SESSION["id_usuario"] = $resultado["id_usuario"]; // Id guardado en sesión
      respuesta("ok", "Login correcto", ["id_usuario" => $resultado["id_usuario"]]);
    }

    respuesta($resultado["status"], $resultado["mensaje"]);

} else {
    respuesta("error", "Metodo no permitido");
}

?>
