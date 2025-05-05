<?php
        //Creamos las variables necesarias para la conexión
        $nombre_servidor = "localhost"; 
        $user = "root";//Usuario por defecto en mysql
        $password = "";//Contraseña por defecto en mysql
        $nombre_bd = "gestor_de_tareas";//Nombre de la base de datos
        
        //Creamos la conexión mediante la variable $conn que contiene la función mysqli_connect("nombre servidor/ip", "usuario","contraseña, "nombre bbdd")
        $conn = mysqli_connect($nombre_servidor, $user, $password, $nombre_bd);
        
        if(!$conn){
            die(mysqli_connect_error()); //con la funcion die si el valor de $conn es falso manda el mensaje de error y termina la ejecución del programa
        }
?>
