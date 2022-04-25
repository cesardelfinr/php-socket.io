const socket = io.connect(); 
    socket.on('nuevo_usuario', function(datos){
        alert('Nuevo usuario conectado: ' + datos.user);
    });
    // Cada cliente escucha este emit
    socket.on('nuevo_mensaje', function(datos){
        $('#cont_mensajes').append('<p> <strong> ' + datos.user + '</strong> ' + datos.mensaje + '</p>')
    });
function loguear(correo, usuario) { 
    socket.emit('datos_usuario', {correo: correo, usuario: usuario});
}

function enviar_msj(usuario, mensaje) {
    socket.emit('send_mensaje', {mensaje: mensaje, usuario: usuario});
}