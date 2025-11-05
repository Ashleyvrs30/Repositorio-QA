const {potencia, raizCuadrada} = require('./calculadoraAvanzada');  

// Importamos las funciones potencia y raizCuadrada del archivo calculadoraAvanzada.js

describe('Potencia', () => {// Creamos un bloque de pruebas para la función potencia
    test ('2 ^ 2 es 4', () => {
        expect(potencia(2, 2)).toBe(4);// Verificamos que 2 elevado a 2 sea igual a 4
    });

    test ('2 ^ 0 es 1', () => {
        expect(potencia(2, 0)).toBe(1);
    });
    test ('2 ^ 1 es 2', () => {
        expect(potencia(2, 1)).toBe(2);// Verificamos que 2 elevado a 1 sea igual a 2
    });

    });

describe('Raíz Cuadrada', () => {

        test ('Raíz cuadrada de 4 es 2', () => {
            expect(raizCuadrada(4)).toBe(2);
        }); 
        test ('Raíz cuadrada de 0 es 0', () => {
            expect(raizCuadrada(0)).toBe(0);
        });
          test ('Raíz cuadrada de cualquier numero negativo no existe', () => {
            expect(() => raizCuadrada(-1)).toThrow("No se puede calcular la raíz cuadrada de un número negativo");
            //() =>  raizCuadrada(-1) es una función que lanza un error
            //toThrow verifica que se lance un error con el mensaje especificado
            //se pone expect(() => raizCuadrada(-1)) para que se ejecute la función raizCuadrada con el argumento -1
            //y se verifique que lanza el error esperado
            //se utiliza (() => para que no se ejecute inmediatamente sino que se ejecute cuando Jest lo requiera
        });

        });
