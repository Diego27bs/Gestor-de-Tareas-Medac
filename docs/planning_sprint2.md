# 📅 Planning Sprint 2 - Gestor de Tareas

**Duración del sprint**: 2 semanas  
**Objetivo principal**: Crear y gestionar proyectos y tareas dentro del sistema.

---

## 🧠 Objetivo funcional

- Crear y listar proyectos
- Crear y listar tareas asociadas a proyectos
- Cambiar el estado de una tarea
- Mostrar tareas por estado y por proyecto

---

## 👥 Asignación de tareas (Sprint 2)

### 🗂️ Gestión de proyectos

| Tarea                                                         | Asignado a         |
|---------------------------------------------------------------|--------------------|
| Crear tabla `proyectos` en la base de datos                   | Ismael             |
| Crear endpoint `crear.php` para proyectos                     | Antonio            |
| Crear endpoint `listar.php` para proyectos                    | Pablo Gurpegui     |
| Maquetar formulario para crear nuevo proyecto                 | Laura              |
| Mostrar lista de proyectos del usuario conectado              | Carmen             |
| Mostrar detalle de un proyecto con sus tareas                 | Diego              |

---

### ✅ Gestión de tareas

| Tarea                                                         | Asignado a         |
|---------------------------------------------------------------|--------------------|
| Crear tabla `tareas` en la base de datos                      | Pablo              |
| Crear endpoint `crear.php` para tareas                        | Juan Luis          |
| Crear endpoint `listar.php` por proyecto                      | Antonio            |
| Crear endpoint `cambiar_estado.php`                           | Antonio     |
| Maquetar formulario para crear tarea                          | Luciana            |
| Mostrar tareas por proyecto en el panel principal             | Manuel             |
| Añadir funcionalidad de cambio de estado (select o botón)     | Carmen + Manuel    |

---

### 📋 Documentación y QA

| Tarea                                                         | Asignado a         |
|---------------------------------------------------------------|--------------------|
| Documentar API de proyectos (`crear`, `listar`)               | Carmen     |
| Documentar API de tareas (`crear`, `listar`, `cambiar_estado`) | Ismael     |
| Revisar estándares de código y nombres                        | Diego              |
| Validar funcionamiento completo de flujo proyecto + tareas    | Diego + Laura      |


---

## 🧠 Notas

- Las vistas de proyectos y tareas serán simples (sin estilo Kanban de momento).
- El cambio de estado de tareas puede ser mediante select o botones.
- El equipo debe definir cómo se relacionan las tareas con los proyectos a nivel de base de datos.
- Deben tener en cuenta cómo se mostrará esa relación en el frontend.

