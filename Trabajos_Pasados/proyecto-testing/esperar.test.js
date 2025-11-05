const esperar = require('./esperar'); // Importa la función a testear

test('espera 100ms sin errores', async () => {
  await esperar(100); // Espera 100 milisegundos
  expect(true).toBeTruthy(); // Afirmación básica para verificar que no hubo error
});

