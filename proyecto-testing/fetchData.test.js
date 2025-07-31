const fetchData = require('./fetchData');

describe('fetchData', () => {

  test('debe retornar datos simulados cuando la URL es válida', async () => {// Verifica que la función retorne datos simulados cuando la URL es válida
    const resultado = await fetchData('https://ejemplo.com');// Llama a la función fetchData con una URL válida
    expect(resultado).toBe('Datos simulados de: https://ejemplo.com');
    // Verifica que el resultado sea el esperado
  });

  test('debe lanzar error cuando la URL está vacía', async () => {
    await expect(fetchData('')).rejects.toThrow('La URL no puede estar vacía');
    // Verifica que la función lance un error cuando la URL está vacía
  });

});

