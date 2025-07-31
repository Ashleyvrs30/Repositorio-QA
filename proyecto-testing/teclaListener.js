// Función que agrega un listener para detectar tecla Enter
function agregarListener(callback) {
  document.addEventListener('keydown', (event) => {
    // Solo llama al callback si la tecla es Enter
    if (event.key === 'Enter') {
      callback();
    }
  });
}


module.exports = agregarListener;