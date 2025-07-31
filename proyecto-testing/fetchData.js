async function fetchData(url) { //el async en este caso indica que la función es asíncrona
  if (!url) {//!url verifica si la URL está vacía
    throw new Error('La URL no puede estar vacía');
  }

  // Simulación de una llamada real con setTimeout (opcional)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Datos simulados de: ${url}`);// esta línea simula una respuesta de datos
    }, 100);
  });
}

module.exports = fetchData;
