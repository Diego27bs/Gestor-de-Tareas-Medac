<?php
    session_start(); //iniciar sesión

    if(!isset($_SESSION['usuario_id'])){
        header("Location: login.php"); //si no hay usuario en sesión redirige a login
        exit(); //detiene ejecución del script después de la redirección para que no siga ejecutándose
    }

?>