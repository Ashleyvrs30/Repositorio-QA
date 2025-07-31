const  buscarProducto = require('./buscarProducto');

test('lista que contiene arroz', () => {
    const lista = ['arroz', 'pan', 'leche'];
    expect(buscarProducto(lista, 'arroz')).toBeTruthy() ;
} );
test('lista no contiene carne', () => {
    const lista = ['arroz', 'pan', 'leche'];
    expect(buscarProducto(lista, 'carne')).toBeFalsy() ;
} );