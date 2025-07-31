const configurarElementoConEvento = require('./eventoPersonalizado');// Importa la función que configura el evento personalizado

test('ejecuta callback cuando se dispara evento personalizado', () => {
  const div = document.createElement('div');// Crea un elemento div para probar el evento
  const mockCallback = jest.fn();// Crea una función mock para verificar si se llama al callback

  configurarElementoConEvento(div, mockCallback);// Configura el elemento para escuchar el evento personalizado

  // Crear y despachar el evento personalizado
  const evento = new Event('eventoEspecial');// Crea un nuevo evento personalizado
  div.dispatchEvent(evento);

  expect(mockCallback).toHaveBeenCalled();
});
