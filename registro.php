<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = $_POST['nombre_usuario'];
    $correo_electronico = $_POST['correo_electronico'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); 

    $query = "SELECT * FROM usuarios WHERE correo_electronico = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $correo_electronico);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "El correo electrónico ya está registrado. Por favor, utiliza otro.";
    } else {
        
        $query = "INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasena) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sss", $nombre_usuario, $correo_electronico, $contrasena);

        if ($stmt->execute()) {
            header("Location: lecciones.html");
            exit();
        } else {
            echo "Ocurrió un error. Por favor, inténtalo nuevamente.";
        }
    }
    
    $stmt->close();
}
$conn->close();
?>