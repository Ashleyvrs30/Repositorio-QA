const {test, expect} = require('@playwright/test');

test('Click en botones en DemoQA', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons');
//es el doble click en el boton
    await page.dblclick('#doubleClickBtn');
    const mensajeDoble = await page.locator('#doubleClickMessage').textContent();
    expect(mensajeDoble).toContain('You have done a double click');

//click derecho en el boton
    await page.click('#rightClickBtn', { button: 'right' });
    const mensajeDerecho = await page.locator('#rightClickMessage').textContent();
    expect(mensajeDerecho).toContain('You have done a right click');

//click simple en donde usaremos getbyrole con name excto
    await page.getByRole('button', { name: 'Click Me',exact:true }).click();
    const mensajeNormal = await page.locator('#dynamicClickMessage').textContent();
    expect(mensajeNormal).toContain('You have done a dynamic click');

    })