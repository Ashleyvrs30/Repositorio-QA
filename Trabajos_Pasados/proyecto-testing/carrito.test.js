
const { agregarProducto, vaciarCarrito } = require('./carrito');

describe('Carrito de compras', () => {
    let carrito;

    beforeEach(() => {
        carrito = [];//aca se comienza con un carrito vacio
    });
test('agregar un producto ', () => {
    agregarProducto(carrito, 'manzana');
    expect(carrito).toContain('manzana');
});
test('agregar segundo y tercer producto ', () => {
    agregarProducto(carrito, 'huevo');
    agregarProducto(carrito, 'leche');
    expect(carrito).toEqual(['huevo', 'leche']);
});
test ('Carrito vacio antes de cada test', () => {
    vaciarCarrito(carrito);
    expect(carrito.length).toBe(0);
        

});
});
