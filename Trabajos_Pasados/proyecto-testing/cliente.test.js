const procesarCliente = require('./cliente');// Importa la función procesarCliente del módulo cliente
const utils = require('./utils');// Importa el módulo utils que contiene la función saludar

test('saludar es llamado al procesar cliente', () => {
  const spy = jest.spyOn(utils, 'saludar');// Crea un espía para la función saludar del módulo utils

  procesarCliente('Luis');// Llama a la función procesarCliente con el nombre 'Luis'

  expect(spy).toHaveBeenCalled();//spy verifica que la función saludar fue llamada
  expect(spy).toHaveBeenCalledWith('Luis');//tohaveBeenCalledWith verifica que la función saludar fue llamada con el argumento 'Luis'

  spy.mockRestore(); // Devolver comportamiento original
});
