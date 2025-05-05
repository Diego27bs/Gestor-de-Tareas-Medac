# 📌 Gestor de Tareas  
![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-blue) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 📖 Descripción

Este proyecto es una aplicación web pensada para hacer más fácil la organización del trabajo diario. Permite crear, editar y eliminar tareas de manera sencilla, ayudando a gestionar el tiempo de forma más eficiente. Está desarrollado con tecnologías web actuales y cuenta con una interfaz intuitiva para una mejor experiencia de usuario.

## 🚀 Tecnologías utilizadas
- **Frontend:** ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- **Backend:** ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)


## 🚧 Estado del Proyecto
**Actualmente en fase de inicialización:**  ¡Estamos empezando a darle forma! 


## 🔧 Instalación y configuración
1. **Clonar el repositorio**: 
   ```bash
   git clone https://github.com/RubenRuizZaitec/GestorDeTareas.git
   ```
2. **Configurar el servidor local**:
   - Inicia XAMPP/WAMP (o el servidor local que estés utilizando)
   - Levanta los servicios de Apache y MySQL
3. **Configurar la base de datos:**
   - Accede a phpMyAdmin y crea la base de datos `'proyecto'`
   - Importar el archivo `estructura_bd.sql` desde el directorio /backend/utils en MySQL.
   - Configurar el archivo `config.php` con tus credenciales correctas de conexión:
   ```php
      $nombre_servidor = "localhost";
      $user = "root";
      $password = "";
      $nombre_bd = "proyecto";
   ```
   >[!WARNING]
   El nombre de la `base de datos creada` **debe coincidir** con el valor de `$nombre_bd` en el archivo `config.php`


## 📂 Más información

Para más detalles sobre la estructura del proyecto, convenciones de nombres y estándares de código, [consulta el archivo convenciones.md](docs/convenciones.md)

## 👩‍💻👨‍💻 Desarrolladores del Proyecto

- 🔸 **Carmen Cáceres Rubio** (Frontend)
- 🔸 **Manuel Cardoso Gil** (Frontend)
- 🔸 **Luciana Laura Viviani** (Frontend)
- 🔸 **Laura Campa Gonzalez** (Frontend)
- 🔸 **Diego Barreira Sobrado** (Frontend)
- 🔹 **Antonio López Fernández** (Backend)
- 🔹 **Pablo Díaz García** (Backend)
- 🔹 **Pablo Gurpegui Guevea** (Backend)
- 🔹 **Juan Luis Navarro González** (Backend)
- 🔹 **Ismael Mañas Gay** (Backend)


## 📜 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.


