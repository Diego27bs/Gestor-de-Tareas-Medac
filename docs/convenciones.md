# Convenciones del Proyecto - Gestor de Tareas

Este documento recoge las reglas y normas que debemos seguir todos en el equipo para mantener una estructura, estilo y forma de trabajar coherente.

## 📁 Estructura de carpetas
/backend
  /controladores     → Lógica del sistema (PHP)
  /modelos           → Clases o scripts que interactúan con la BBDD
  /utils             → Funciones comunes y helpers
  index.php          → Entrada principal del backend

/frontend
  /js                → Archivos JavaScript
  /css               → Estilos propios (además de Tailwind)
  /templates         → Vistas HTML parciales o completas
  index.html         → Página principal

## 📦 Convención de nombres

### PHP
- Variables: `snake_case` → `$nombre_usuario`
- Archivos: `crear.php`, `login.php`

### JavaScript
- Variables: `camelCase` → `nombreUsuario`
- Archivos: `app.js`, `kanban.js`

### JSON
- Siempre usar comillas dobles
- Las respuestas deben devolver siempre:  
  `status`, `mensaje`, y opcionalmente `datos`

## 🟡 Estados de tarea permitidos
- `pendiente`
- `en_progreso`
- `finalizada`

## 💬 Comentarios y estilo
- Código limpio y comentado
- No dejar `console.log()` ni `var_dump()` en producción
