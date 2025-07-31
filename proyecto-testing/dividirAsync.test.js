const dividirAsync = require('./dividirAsync');

test('divide números asíncronamente correctamente', async () => {// Esta prueba verifica que la función dividirAsync divide correctamente dos números
  const resultado = await dividirAsync(10, 2);// Utiliza await para esperar a que la promesa se resuelva
  expect(resultado).toBe(5);
});

test('lanza error al dividir por cero', async () => {
  await expect(dividirAsync(10, 0)).rejects.toThrow('No se puede dividir por cero');
}); //Se utiliza para probar que la promesa es rechazada con un error específico.
//Esto permite manejar errores de manera ordenada dentro de tests asíncronos.
