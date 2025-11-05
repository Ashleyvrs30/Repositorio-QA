function validarContraseña(password) {
    return password.length >= 8 && /\d/.test(password);
}
module.exports = validarContraseña;