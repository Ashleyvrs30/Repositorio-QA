const utils = require('./utils');// Importa el módulo utils que contiene la función saludar

function procesarCliente(nombre) {// Esta función toma un nombre, utiliza la función saludar del módulo utils para generar un saludo y luego lo convierte a mayúsculas
  return utils.saludar(nombre).toUpperCase(); // Convierte el saludo a mayúsculas
}

module.exports = procesarCliente;
// Esta función toma un nombre, utiliza la función saludar del módulo utils para generar un saludo y luego lo convierte a mayúsculas.