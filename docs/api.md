# 📑 Documentación de la API - Gestor de Tareas

Este documento recoge los contratos que se deben cumplir entre el frontend y el backend. Cada endpoint debe estar bien documentado, indicando:

- Ruta del endpoint
- Método HTTP
- Datos que espera recibir
- Formato del JSON de respuesta
- Estados posibles y errores

---

## 🔐 LOGIN DE USUARIO

### 📍 Endpoint
`POST /api/usuarios/login.php`

### 🧾 Descripción
Permite a un usuario iniciar sesión en el sistema.

### 📤 JSON de entrada
```json
{
  "email": "usuario@empresa.com",
  "password": "1234"
}

📥 Respuesta (éxito)
{
  "status": "ok",
  "mensaje": "Inicio de sesión correcto",
  "usuario_id": 1
}

❌ Respuesta (error)
{
  "status": "error",
  "mensaje": "Credenciales incorrectas"
}