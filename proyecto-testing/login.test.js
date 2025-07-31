const login = require('./login');
const email = require('./email');


test ('enviar correo al hacer login correcto', () => {
    const spy = jest.spyOn(email, 'enviarCorreo');
    const resultado =login('admin', '1234');
    expect(resultado).toBe('Login permitido');
    expect(spy).toHaveBeenCalledWith('admin');
    spy.mockRestore();
});

test ('no enviar correo si las credenciales son incorrectas', () => {
    const spy = jest.spyOn(email, 'enviarCorreo');
    const resultado = login('usuario', 'mal');
    expect(resultado).toBe('Login denegado');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();      
});

//la funcion jest.spyOn() crea un espia sobre una fucion existente, permitiendo 
// rastrear sus llamadas y argumentos.para que esta no se ejecute
//la función mockRestore() limpia al espia,para que no afecte a optras pruebas
