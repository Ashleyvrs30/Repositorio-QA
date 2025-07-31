//// Función que retorna una promesa que se resuelve después de 'ms' milisegundos
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));// Esta función permite esperar un tiempo específico antes de continuar la ejecución
}

module.exports = esperar; // Exporta la función para usarla en otros archivos
// Esta función es útil para simular esperas en pruebas asíncronas o para crear delays en la ejecución de código.