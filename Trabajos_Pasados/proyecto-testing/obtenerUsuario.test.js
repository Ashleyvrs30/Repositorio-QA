const obtenerUsuario = require('./obtenerUsuario');

test('el  Usuario tiene el nombre de Carlos', () => {
    expect(obtenerUsuario()).toEqual({ nombre: 'Carlos', activo: true });
});