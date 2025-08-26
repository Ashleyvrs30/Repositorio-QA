const {test,expect} = require('@playwright/test');



test.describe ('Pagina de Login https://demoqa.com/login',  () => {
  test('Pagina',async ({ page })=> {
  await page.goto('https://demoqa.com/login');
  await expect(page).toHaveTitle(/DEMOQA/);

 });

  test('Login invalido',async ({ page })=> {
  await page.goto('https://demoqa.com/login');
  await page.fill('#userName','usuario_invalido') ;
  await page.fill('#password','contraseña_erroena')  ;
  await page.click('#login') ;
  await expect(page.locator('#name')).toHaveText('Invalid username or password!')  ;
 });
test('Boton de login deshabilitado',async ({ page })=> {
  await page.goto('https://demoqa.com/login');
  const isDisabled = await page.locator('#login').isDisabled();
  expect(isDisabled).toBe(false);
   });
    });
    
