const validarContraseña = require('./validarContraseña');


test ('contraseña válida', () => {
    expect(validarContraseña('abcd12345')).toBeTruthy();
});

test ('contraseña muy corta', () => {
    expect(validarContraseña('ab1')).toBeFalsy();
});
test ('contraseña sin números', () => {
    expect(validarContraseña('abcdefghij')).toBeFalsy();
});