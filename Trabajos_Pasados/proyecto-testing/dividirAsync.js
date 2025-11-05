function dividirAsync(a, b) {// Función que divide dos números de forma asíncrona
  return new Promise((resolve, reject) => {// Crea una nueva promesa
    // Simula una operación asíncrona con setTimeout
    
    setTimeout(() => {// Espera 500 ms antes de resolver o rechazar la promesa
      if (b === 0) {
        reject(new Error('No se puede dividir por cero'));
      } else {
        resolve(a / b);// Resuelve la promesa con el resultado de la división
      }
    }, 500);
  });
}

module.exports = dividirAsync;
