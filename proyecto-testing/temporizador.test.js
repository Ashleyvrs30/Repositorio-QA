const ejecutarConRetraso = require('./temporizador');

jest.useFakeTimers();//useFakeTimers permite simular el paso del tiempo en las pruebas

test('ejecuta callback después de 2 segundos', () => {
  const callback = jest.fn();// Crea una función mock para verificar si se llama al callback

  ejecutarConRetraso(callback);//   Llama a la función con el callback

  // Todavía no ha pasado el tiempo
  expect(callback).not.toHaveBeenCalled();

  jest.advanceTimersByTime(2000); // Simula el paso de 2 segundos

  expect(callback).toHaveBeenCalledWith('¡Ejecutado!');// Verifica que el callback fue llamado con el argumento esperado
});

