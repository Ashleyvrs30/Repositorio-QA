const agregarListener = require('./teclaListener');


describe('agregarListener', () => {
  beforeEach(() => {
    document.body.innerHTML = ''; // limpio el DOM antes de cada test
  });


  test('llama al callback si se presiona Enter', () => {
    const mockCallback = jest.fn();
    agregarListener(mockCallback);


    // Simulo presionar Enter
    const evento = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(evento);


    expect(mockCallback).toHaveBeenCalled(); // debería haberse llamado
  });


  test('NO llama al callback si se presiona otra tecla', () => {
    const mockCallback = jest.fn();
    agregarListener(mockCallback);


    // Simulo presionar otra tecla (Escape)
    const evento = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(evento);


    expect(mockCallback).not.toHaveBeenCalled(); // no debería llamarse
  });
});
