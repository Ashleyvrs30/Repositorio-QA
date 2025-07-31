const crearContador = require('./contador');
//el bedoreeach se usa cuando se necesita reiniciar un estadocomo es un array o un contador
// el beforeAll se usa para abrir conexiones a bases de datos o archivos puede ser real o simulado
// el afterEach se usa para limpiar el estado de un test, por ejemplo borrar un archivo
describe('ContadoContador reiniciable', () => {
    let contador;
    beforeEach(() => {
        contador = crearContador();
    });

    test ('Inicialmente es 0', () => {
        expect(contador.obtener()).toBe(0);
    }); 
    test('Despues de incrementar una vez es 1', () => {
        contador.incrementar();
        expect(contador.obtener()).toBe(1); 
    });
    test('Despues de dos incrementos es   2', () => {
        contador.incrementar();
        contador.incrementar(); 
        expect(contador.obtener()).toBe(2);
    });

     });