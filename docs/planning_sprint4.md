# 📅 Planning Sprint 4 - Gestor de Tareas

**Duración del sprint**: 2 semanas  
**Objetivo principal**: Implementar la gestión de usuarios y roles.

---

## 🧠 Objetivo funcional

- Crear usuarios desde panel (por parte de un administrador)
- Asignar roles a los usuarios (admin, usuario)
- Restringir accesos a funcionalidades según el rol
- Mostrar listado de usuarios en el sistema
- Utilizar la lista de usuarios en asignación de tareas

---

## 👥 Asignación de tareas (Sprint 4)

### 🔧 Backend

| Tarea                                                                 | Asignado a         |
|-----------------------------------------------------------------------|--------------------|
| Crear campo `rol` en tabla `usuarios`                                | Ismael             |
| Crear endpoint `crear_usuario.php` (solo para admin)                 | Pablo              |
| Crear endpoint `listar_usuarios.php`                                 | Pablo Gurpegui     |
| Crear middleware/verificación de permisos en endpoints               | Antonio            |
| Modificar `asignar_usuario.php` para validar usuarios existentes     | Juan Luis          |

---

### 🎨 Frontend

| Tarea                                                                 | Asignado a         |
|-----------------------------------------------------------------------|--------------------|
| Maquetar formulario para crear nuevo usuario                         | Luciana            |
| Mostrar lista de usuarios en el panel de administración              | Laura              |
| Mostrar nombre de usuario y rol en la parte superior (navbar)        | Carmen             |
| Usar la lista de usuarios para asignación de tareas (select)         | Diego              |

---

### 📋 QA + Documentación

| Tarea                                                                 | Asignado a         |
|-----------------------------------------------------------------------|--------------------|
| Documentar endpoints en `api.md`                                     | Juan Francisco     |
| Verificar restricción de accesos según rol (admin vs usuario)        | Laura              |
| Testear creación y asignación de usuarios                            | Manuel             |


---

## 🧠 Notas

- El sistema debe impedir el acceso a endpoints y vistas protegidas si el usuario no es admin.
- En este sprint se mantiene la autenticación básica mediante sesión.
- Se puede usar un select en tareas para mostrar todos los usuarios disponibles.
- Los roles pueden ser: `admin`, `usuario`, y deben ser validados en backend.
