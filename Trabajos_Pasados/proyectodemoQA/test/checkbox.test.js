const {test, expect} = require('@playwright/test');

test('Seleccionar checkbox y validar seleccion de DemoQA', async ({ page }) => {
await page.goto( 'https://demoqa.com/checkbox');

//expandir todo el arbol de opciones
await page.click( '.rct-option-expand-all');

//haga click en el titulo del checkbox desktop
await page.locator( 'span.rct-title', { hasText: 'Desktop' }).click();

//verificar que aparexca la seleccion correcta
const resultado = await page.locator('#result').textContent();
expect(resultado.toLowerCase()).toContain('desktop');

    })
