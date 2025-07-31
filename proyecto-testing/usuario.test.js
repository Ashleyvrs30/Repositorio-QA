const obtenerUsuario = require('./usuario');

describe('obtenerUsuario', () => {
  test('Devuelve el usuario Ana con ID 1 (usando async/await)', async () => {
    const usuario = await obtenerUsuario(1);
    expect(usuario).toEqual({ nombre: 'Ana', edad: 30 });
  });

  test('Devuelve el usuario Luis con ID 2 (usando resolves)', () => {
    return expect(obtenerUsuario(2)).resolves.toEqual({ nombre: 'Luis', edad: 25 });
  });

  test('Rechaza si el usuario no existe (usando rejects)', () => {
    return expect(obtenerUsuario(99)).rejects.toBe('Usuario no encontrado');
  });
});

