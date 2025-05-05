<?php
header('Content-Type: application/json');

// Permitir peticiones desde cualquier origen (CORS), si hace falta
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    // Solo permitir método POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Método no permitido', 405);
    }

    // Obtener datos del body como JSON
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['email']) || !isset($data['password'])) {
        throw new Exception('Faltan campos requeridos', 400);
    }

    $email = trim($data['email']);
    $password = trim($data['password']);

    // Validación básica
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Email no válido', 422);
    }

    if (strlen($password) < 6) {
        throw new Exception('La contraseña debe tener al menos 6 caracteres', 422);
    }

    // Simulación de base de datos (reemplazar por una consulta real)
    $usuarios = [
        'usuario@ejemplo.com' => '123456'
    ];

    if (!array_key_exists($email, $usuarios) || $usuarios[$email] !== $password) {
        throw new Exception('Credenciales incorrectas', 401);
    }

    // Si todo está bien
    echo json_encode([
        'success' => true,
        'message' => 'Inicio de sesión exitoso',
        'user' => [
            'email' => $email,
        ]
    ]);
    exit;

} catch (Exception $e) {
    http_response_code($e->getCode() ?: 500); // Si no hay código, usar 500
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
    exit;
}
?>
