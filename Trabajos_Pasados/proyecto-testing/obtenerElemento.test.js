const obtenerElemento = require('./obtenerElemento');

describe('obtenerElemento', () => {

  test('debe retornar el elemento correctamente cuando el índice es válido', () => {
    const array = ['a', 'b', 'c'];
    expect(obtenerElemento(array, 1)).toBe('b'); // correcto
    // Verifica que el elemento en el índice 1 sea 'b'
  });

  test('debe lanzar error si el índice es menor que 0', () => {
    const array = [10, 20, 30];
    expect(() => obtenerElemento(array, -1)).toThrow('Índice fuera de rango');// Verifica que lanzar error si el índice es menor que 0
    
  });

  test('debe lanzar error si el índice es mayor o igual al largo del array', () => {
    const array = [1, 2, 3];
    expect(() => obtenerElemento(array, 3)).toThrow('Índice fuera de rango');
    // Verifica que lanzar error si el índice es mayor o igual al largo del array
  });

  test('debe lanzar error si el primer argumento no es un array', () => {
    expect(() => obtenerElemento('no es un array', 0)).toThrow('El primer argumento debe ser un array');
    // Verifica que lanzar error si el primer argumento no es un array
  });

});
