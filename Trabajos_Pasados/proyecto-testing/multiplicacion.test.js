const multiplicacion= require('./multiplicacion');
test ('la multiplicacion  de 5 * 3 es igual a 15',()  => {
expect(multiplicacion(5, 3)).toBe(15);
});
