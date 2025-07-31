const  esMayorDeEdad = require('./esMayorDeEdad');

test('es mayor de edad con 20 años devuelve true', () => {
    expect(esMayorDeEdad(20)).toBeTruthy();//toBeTruthy() indica que la condicion es verdadera
});
test('es mayor de edad con 17 años devuelve false', () => {
    expect(esMayorDeEdad(17)).toBeFalsy();//toBeFalsy() indica que la condicion es falsa
});