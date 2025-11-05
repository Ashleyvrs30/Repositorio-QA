const limpiarTexto = require ('./limpiarTexto');

test ('elimina los espacios al principio y final de una palabra',()=>{
    expect (limpiarTexto(' hola mundo  ')).toBe('hola mundo');
});


test ('El texto sin espacios en sus extremos se mantienen igual',()=>{
    expect (limpiarTexto('hola mundo')).toBe ('hola mundo');
});