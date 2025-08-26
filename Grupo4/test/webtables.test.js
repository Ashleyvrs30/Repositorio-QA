const { test, expect } = require('@playwright/test');


test('agregar un registro en DemoQA', async ({ page }) => {
  // Ir a la página de WebTables
  await page.goto('https://demoqa.com/webtables');


  // Esperar a que esté visible el botón "Add"
  await page.waitForSelector('#addNewRecordButton');
  await page.click('#addNewRecordButton');


  // Completar el formulario con datos de prueba
  await page.fill('#firstName', 'Makarena');
  await page.fill('#lastName', 'Bañares');
  await page.fill('#userEmail', 'Makarenab@example.com');
  await page.fill('#age', '33');
  await page.fill('#salary', '900000');
  await page.fill('#department', 'QA');


  // Enviar el formulario presionando el botón "Submit"
  await page.click('#submit');


  // Esperar a que aparezca la tabla con el nuevo registro
  await page.waitForSelector('.rt-tbody');


  // Obtener el texto de la tabla
  const rowText = await page.locator('.rt-tbody').textContent();


  // Verificar que el nombre ingresado aparezca en la tabla
  expect(rowText).toContain('Makarena');
});
