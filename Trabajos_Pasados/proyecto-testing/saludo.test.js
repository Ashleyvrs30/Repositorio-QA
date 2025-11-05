const saludarConFecha = require('./saludo');


jest.useFakeTimers();// Utiliza temporizadores falsos para controlar el tiempo en las pruebas


test('devuelve "Buenos días" si es de mañana', () => {// Verifica que la función devuelve "Buenos días" si es de mañana
  const fecha = new Date(2025, 6, 21, 9, 0, 0); // 9:00 AM local
  jest.setSystemTime(fecha);// Establece la hora actual a las 9:00 AM


  expect(saludarConFecha()).toBe('Buenos días');
});
