
function obtenerElemento(array, index) {// función que obtiene un elemento de un array por su índice
  if (!Array.isArray(array)) {//array es un objeto especial que contiene una lista de elementos
    //!array verifica si el primer argumento es un array
    throw new Error('El primer argumento debe ser un array');
  }

  if (index < 0 || index >= array.length) {
    throw new Error('Índice fuera de rango');//esta condición verifica si el índice es menor que 0 o mayor o igual al largo del array
  }

  return array[index];
}

module.exports = obtenerElemento;
