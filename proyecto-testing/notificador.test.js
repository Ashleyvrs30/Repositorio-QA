const notificarUsuario = require('./notificador');
const enviarEmail = require('./enviarEmail');

jest.mock('./enviarEmail'); // Crea un mock automático

test('lanza error si usuario no tiene email', () => {
  expect(() => notificarUsuario({ nombre: 'Ana' })).toThrow('Usuario sin email');// Verifica que se lanza un error si no hay email
});

test('llama a enviarEmail con email y mensaje', () => {// Verifica que se llama a enviarEmail con los parámetros correctos
  const usuario = { email: 'ana@example.com' };
  
  notificarUsuario(usuario);// Llama a la función notificarUsuario con un usuario que tiene email

  expect(enviarEmail).toHaveBeenCalled(); // Verifica que se llamó
  expect(enviarEmail).toHaveBeenCalledWith('ana@example.com', '¡Tienes una notificación!');// Verifica que se llamó con los parámetros correctos
});
