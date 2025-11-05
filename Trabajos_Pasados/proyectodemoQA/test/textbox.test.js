const  {test, expect} = require('@playwright/test');

test('completar y verificar formulario en DemoQA', async ({ page }) => {
await page.goto('https://demoqa.com/text-box');

await page.fill('#userName', 'Juan Perez');//tipo clase .,tipoid #
await page.fill('#userEmail', 'juan@example.com');
await page.fill('#currentAddress', 'calle falsa 123');
await page.fill('#permanentAddress', 'casa');

await page.click('#submit');

const nombre = await page.locator('#name').textContent();
expect(nombre).toContain('Juan Perez');

const correo = await page.locator('#email').textContent();
expect(correo).toContain('juan@example.com');
  })      
  //page.locator sirve para localizar un elemento en la pagina
//textContent obtiene el texto de un elemento



//npx playwright test --reporter=html   
//npx playwright show-report