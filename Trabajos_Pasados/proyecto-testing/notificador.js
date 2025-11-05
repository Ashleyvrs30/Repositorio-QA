const enviarEmail = require('./enviarEmail');// Importa la función enviarEmail desde el archivo enviarEmail.js
function notificarUsuario(usuario) {
  if (!usuario.email) {
    throw new Error('Usuario sin email');// Verifica que el usuario tenga un email
  }
  const mensaje = '¡Tienes una notificación!';// Mensaje de notificación
  return enviarEmail(usuario.email, mensaje);// Llama a la función enviarEmail para enviar la notificación
}

module.exports = notificarUsuario;// Asegúrate de exportar la función para que pueda ser utilizada en otros archivos
