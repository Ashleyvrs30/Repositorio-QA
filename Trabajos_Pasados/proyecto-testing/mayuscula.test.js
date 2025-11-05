const mayuscula= require('./mayuscula');

test ('convierte hola a  HOLA', () => {

    expect(mayuscula('hola')).toBe('HOLA');
} );  

test ('si el texto esta con mayuscula queda sin cambios', () => {
    expect(mayuscula('MUNDO')).toBe('MUNDO');
} );  
