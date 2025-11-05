const sumarLista= require('./sumarLista');
test ('suma de una lista de numeros', () => {
    expect(sumarLista([1, 2, 3])).toBe(6);
});

test ('Para las listas vacias esto devuelve 0', () => {
    expect(sumarLista([])).toBe(0);
});