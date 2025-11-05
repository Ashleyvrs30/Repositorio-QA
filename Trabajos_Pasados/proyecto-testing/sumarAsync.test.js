const sumarAsync = require('./sumarAsync');
 
test('suma dos números asíncronamente usando return', () => {
  // Jest espera que la promesa se resuelva para finalizar el test
  return sumarAsync(2, 3).then(resultado => { // Retornamos la promesa en el test 
    expect(resultado).toBe(5); //Jest esperará que la promesa se resuelva antes de evaluar el expect
  });
}); //Si no retornas la promesa, Jest no esperará y el test podría fallar o pasar sin validar