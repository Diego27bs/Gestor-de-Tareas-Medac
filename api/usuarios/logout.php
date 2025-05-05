<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Cambiar * por dominio concreto si es necesario
header('Access-Control-Allow-Methods: POST');

function respuesta($status, $mensaje){
    echo json_encode(array("status"=>$status, "mensaje"=> $mensaje));
    exit;
}

session_start(); //Iniciar la sesión
session_unset(); //Borrar variables de la sesión
session_destroy(); //Destruir la sesión

/* Eliminar cookies si las hubiera */

respuesta("ok", "Sesión cerrada correctamente");

?>