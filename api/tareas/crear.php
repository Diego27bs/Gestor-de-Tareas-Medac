<?php
// Endpoint para crear una nueva tarea

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$titulo = $data["titulo"] ?? null;
$descripcion = $data["descripcion"] ?? "";
$estado = $data["estado"] ?? "pendiente";
$proyecto_id = $data["proyecto_id"] ?? null;
$asignado_a = $data["asignado_a"] ?? null;
$fecha_entrega = $data["fecha_entrega"] ?? null;

if (!$titulo || !$proyecto_id || !$asignado_a) {
  echo json_encode([
    "status" => "error",
    "mensaje" => "Faltan campos obligatorios"
  ]);
  exit;
}

// Simulación de guardado (esto luego será una inserción en BBDD)
echo json_encode([
  "status" => "ok",
  "mensaje" => "Tarea creada correctamente",
  "tarea_id" => rand(100, 999)
]);
?>