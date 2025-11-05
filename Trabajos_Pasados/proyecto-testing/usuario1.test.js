//mock
jest.mock('./usuario1', () => {// simula el módulo usuario1
    return {
        obtenerDatosUsuario: jest.fn(),// crea un mock de la función obtenerDatosUsuario
        // simula la función mostrarNombreUsuario usando el mock de obtenerDatosUsuario
        mostrarNombreUsuario: jest.fn(async (id) => {//jest.fn crea un mock de la función
            const { obtenerDatosUsuario } = require('./usuario1');
            const usuario = await obtenerDatosUsuario(id);
            return `Nombre: ${usuario.nombre}`;
        }),
    };
});


const { obtenerDatosUsuario, mostrarNombreUsuario } = require('./usuario1');


describe('Tests con mocks', () => {
// limpio todos los mocks antes de cada test
    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Mock de obtenerDatosUsuario devuelve objeto fijo', async () => {
// configurar respuesta fija
        obtenerDatosUsuario.mockResolvedValue({ id: 1, nombre: 'Juan' });


        const datos = await obtenerDatosUsuario(1);
        expect(datos).toEqual({ id: 1, nombre: 'Juan' });
    });


    test('mostrarNombreUsuario usa el mock de obtenerDatosUsuario', async () => {
// seteo respuesta simulada
        obtenerDatosUsuario.mockResolvedValue({ id: 2, nombre: 'Ana' });


        const resultado = await mostrarNombreUsuario(2);
        expect(resultado).toBe('Nombre: Ana');
    });


    test('mockImplementation devuelve distintos usuarios', async () => {
// simulo respuestas distintas según el id
        obtenerDatosUsuario.mockImplementation((id) => {
            if (id === 1) return Promise.resolve({ nombre: 'Juan' });
            if (id === 2) return Promise.resolve({ nombre: 'Ana' });
            return Promise.resolve({ nombre: 'Desconocido' });
        });


        expect(await mostrarNombreUsuario(1)).toBe('Nombre: Juan');//await espera la resolución de la promesa
        expect(await mostrarNombreUsuario(2)).toBe('Nombre: Ana');
        expect(await mostrarNombreUsuario(999)).toBe('Nombre: Desconocido');
    });
});


