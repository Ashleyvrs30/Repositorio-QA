const esPar = require('./esPar');
test('esPar de 4 ', () => {
    expect(esPar(4)).toBe(true);
});
test ('esPar de 5 ', () => {
    expect(esPar(5)).toBe(false);
}   );