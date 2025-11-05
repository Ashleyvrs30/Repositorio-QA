const fetchUsuario = require('./fetchUsuario');


describe('Tests de fetchUsuario', () => {


    test('Devuelve el usuario correcto con ID válido', async () => {
        // debería retornar el usuario con ID 1
        const usuario = await fetchUsuario(1);
        expect(usuario).toEqual({ id: 1, nombre: 'Juan' });
    });


    test('Lanza error si el ID no existe', async () => {
        // si el ID no existe, debería rechazar la promesa
        await expect(fetchUsuario(99)).rejects.toThrow('Usuario no encontrado');
    });


});
