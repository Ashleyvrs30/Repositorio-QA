const repetirCadaSegundo = require('./intervalo'); // Importa la función a testear

jest.useFakeTimers(); // Simula los temporizadores para controlar el tiempo

test('llama callback cada segundo', () => {
  const mock = jest.fn(); // Crea una función simulada (mock)

  repetirCadaSegundo(mock); // Llama a la función que ejecutará el mock cada segundo

  expect(mock).not.toHaveBeenCalled(); // Verifica que al inicio no se haya llamado aún

  jest.advanceTimersByTime(3000); // Simula el paso de 3 segundos

  expect(mock).toHaveBeenCalledTimes(3); // Espera que el mock se haya ejecutado 3 veces
});
