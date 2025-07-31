const   {sumar, restar, multiplicar, dividir} = require('./calculadora');

describe ('Operaciones de suma', () => {

    test('2+3 = 5', () => {
        expect(sumar(2, 3)).toBe(5);
    });

    test('0+0 = 0', () => {
        expect(sumar(0, 0)).toBe(0);
    });

   });

describe ('Operaciones de resta', () => {

    test('5-3 = 2', () => {
        expect(restar(5, 3)).toBe(2);
    });

    test('8-5 = 3', () => {
        expect(restar(8, 5)).toBe(3);
    });

    test('0-2 = -2', () => {
        expect(restar(0, 2)).toBe(-2);
    });
 });

describe ('Operaciones de multiplicación', () => {
       test('2*6 = 12', () => {
        expect(multiplicar(2, 6)).toBe(12) ;
    });

 });

 describe ('Operaciones de división', () => {
    test('6 / 2 = 3', () => {
        expect(dividir(6, 2)).toBe(3);
    });

    test('División por cero', () => {
        expect(() => dividir(5, 0)).toThrow("No se puede dividir por cero");
    });
 }  );