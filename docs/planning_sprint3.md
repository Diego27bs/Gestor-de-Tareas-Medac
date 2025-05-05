# 📅 Planning Sprint 3 - Gestor de Tareas

**Duración del sprint**: 2 semanas  
**Objetivo principal**: Mejorar la visualización y gestión de tareas en el sistema para hacerlo más usable e interactivo.

---

## 🧠 Objetivo funcional

- Crear una vista tipo Kanban para tareas por proyecto
- Añadir filtros por estado, usuario asignado y fecha
- Hacer editable el estado de las tareas desde la interfaz
- Asignar tareas a usuarios existentes
- (Opcional) Añadir comentarios a las tareas

---

## 👥 Asignación de tareas (Sprint 3)

### 🎨 Frontend - Visualización de tareas

| Tarea                                                         | Asignado a         |
|---------------------------------------------------------------|--------------------|
| Maquetar vista Kanban por proyecto                            | Carmen             |
| Mostrar tareas en columnas por estado                         | Diego              |
| Añadir filtros por estado y usuario en la interfaz            | Manuel             |
| Implementar selección de tareas por proyecto activo           | Luciana            |
| Añadir botón/select para cambiar estado desde el frontend     | Carmen + Manuel    |

---

### 🧩 Backend - Apoyo a visualización

| Tarea                                                         | Asignado a         |
|---------------------------------------------------------------|--------------------|
| Crear endpoint para filtrar tareas por estado y usuario       | Ismael             |
| Mejorar `listar.php` para incluir filtros combinados          | Antonio            |
| Crear endpoint `asignar_usuario.php` para actualizar asignado | Pablo              |
| Crear endpoint para añadir comentario a una tarea (opcional)  | Pablo Gurpegui     |
| Actualizar modelo de tarea para incluir comentarios           | Juan Luis          |

---

### 🧪 QA + Docs

| Tarea                                                         | Asignado a         |
|---------------------------------------------------------------|--------------------|
| Documentar API de filtros y comentarios en `api.md`           | Juan Luis          |
| Verificar que los filtros funcionan correctamente             | Laura              |
| Testear la vista Kanban en diferentes navegadores             | Laura + Luciana    |
| Verificar que el cambio de estado en frontend se refleja bien | Diego              |


---

## 🧠 Notas

- El cambio de estado de tareas se hará mediante un botón o `<select>` en la tarjeta.
- Los filtros pueden aplicarse con campos de tipo select o input según el caso.
- Los comentarios pueden ser simples (texto plano) y guardarse con `fecha`, `autor` y `contenido`.
- Cualquier nuevo endpoint debe ser documentado inmediatamente en `api.md`.
