<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["seleccion"];
    $consulta = $_POST["miTextarea"];

    $para = "jbellof@hotmail.com"; 
    $asunto = "Consulta del formulario de contacto";
    $mensaje_completo = "Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje."\nConsulta: ".$consulta;

    // Envía el correo
    mail($para, $asunto, $mensaje_completo);

    // Redirige al usuario a una página de confirmación
    header("Location: confirmacion.html");
    exit();
}
?>
<script>
    window.open('', 'confirmacion.html', 'height=300,width=400');
    window.close();
</script>
