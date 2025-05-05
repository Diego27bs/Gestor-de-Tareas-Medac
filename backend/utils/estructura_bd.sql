CREATE DATABASE gestor_de_tareas;
USE gestor_de_tareas;

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Crear la tabla de proyectos
CREATE TABLE proyectos (
    proyecto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_proyecto VARCHAR(255) NOT NULL,
    num_tareas INT DEFAULT 0,
    descripción_proyecto TEXT
);

-- Crear la tabla de asignaciones de proyectos
CREATE TABLE asignaciones_proyectos (
    asignacion_id INT AUTO_INCREMENT PRIMARY KEY,
    proyecto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(proyecto_id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Crear la tabla de tareas
CREATE TABLE tareas (
    tarea_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    estado ENUM("pendiente", "en progreso", "completada") DEFAULT "pendiente",
    proyecto_id INT,
    fecha_entrega DATE,
    FOREIGN KEY (asignada_a) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id) ON DELETE CASCADE);

-- Contador para num_tareas en tabla proyectos

    DELIMITER //
CREATE TRIGGER al_insertar_tarea
AFTER INSERT ON tareas
FOR EACH ROW
BEGIN
    UPDATE proyectos
    SET num_tareas = num_tareas + 1
    WHERE proyecto_id = NEW.proyecto_id;
END;
//

    FOREIGN KEY (proyecto_id) REFERENCES proyectos(proyecto_id) ON DELETE CASCADE
);

-- Crear la tabla de asignaciones de tareas
CREATE TABLE asignaciones_tareas (
    asignacion_id INT AUTO_INCREMENT PRIMARY KEY,
    tareas_id INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (tareas_id) REFERENCES tareas(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

--A continuación se insertan a la tabla los usuarios de cada participante del proyecto con sus respectivos email y contraseñas

INSERT INTO usuarios (nombre, email, password) VALUES
('Ruben Ruiz', 'ruben.ruiz@zaitec.es', 'Ruru10.'),
('Antonio López Fernández', 'alf0021@alu.medac.es', 'Anlofer21.'),
('Carmen Cáceres Rubio', 'ccr0045@alu.medac.es', 'Cacaru17.'),
('Diego Barreira Sobrado', 'dbs0004@alu.medac.es', 'Dibaso20.'),
('Francisco Jiménez Moral', 'francisco.jmez@zaitec.es', 'Frajimo22.'),
('Ismael Mañas Gay', 'img0019@alu.medac.es', 'Ismaga15.'),
('Juan Luis Navarro González', 'jng0011@alu.medac.es', 'Julunago22.'),
('Laura Campa González', 'lcg0045@alu.medac.es', 'Lacago20.'),
('Luciana Viviani Laura', 'lvi0001@alu.medac.es', 'Luvila18.'),
('Manuel Cardoso Gil', 'mcg0095@alu.medac.es', 'MacaGi18.'),
('Pablo Díaz García', 'pdg0012@alu.medac.es', 'Padigar15.'),
('Pablo Gurpegui Guevea', 'pgg0043@alu.medac.es', 'Pagurgue19.');

-- Datos de la tabla "proyectos"
INSERT INTO proyectos (nombre_proyecto, descripción_proyecto) VALUES
("Gestor de tareas", "Se trata de una aplicación para la clasificación y reparto de las tareas asociadas a un proyecto");

--El patrón usado para generar las contraseñas es el siguiente:
--La primera silaba de cada palabra del nombre y apellidos, seguido de la suma de todos los caracteres y al final un punto