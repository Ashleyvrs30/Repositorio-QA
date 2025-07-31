const email = require('./email'); // Importa el objeto email
function login(usuario, contraseña) {
    if (usuario == 'admin' && contraseña == '1234') {
        email.enviarCorreo(usuario); // Llama a la función enviarCorreo del objeto email
    //.enviarCorreo(usuario);//llama a la funcion desde el objeto
    return 'Login permitido';
    } else {
        return 'Login denegado';
    
}
}
module.exports = login;