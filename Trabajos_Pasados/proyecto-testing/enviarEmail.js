function enviarEmail(destinatario, mensaje) {// Simula enviar un email (en producción llamaría a un servicio real)
  console.log(`Enviando email a ${destinatario}: ${mensaje}`);// Muestra un mensaje en la consola simulando el envío de un email
  return true;
}
module.exports = enviarEmail;