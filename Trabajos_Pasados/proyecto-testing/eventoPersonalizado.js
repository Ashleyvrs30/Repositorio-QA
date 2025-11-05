function configurarElementoConEvento(elemento, callback) {// Configura un elemento para que escuche un evento personalizado
  elemento.addEventListener('eventoEspecial', callback);// Añade un listener para el evento personalizado
}// Esta función permite que el elemento ejecute una función de callback cuando se dispara el evento

module.exports = configurarElementoConEvento;
