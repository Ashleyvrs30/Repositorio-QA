function ejecutarConRetraso(callback) {// Esta función simula una operación que se ejecuta con un retraso
 //callback es una función que se ejecutará después del retraso
    setTimeout(() => {// Utiliza setTimeout para simular un retraso
    callback('¡Ejecutado!');
  }, 2000); // Espera 2 segundos
}

module.exports = ejecutarConRetraso;
