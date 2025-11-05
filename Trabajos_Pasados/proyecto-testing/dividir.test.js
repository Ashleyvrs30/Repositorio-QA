const dividir = require('./dividir');

test('divide correctamente 10 / 2 ', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('al dividir por 0 debe arrojar error', () => {
    expect(() =>dividir(10, 0)).toThrow ('No se puede dividir por cero');
});