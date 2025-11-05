import {test , expect} from '@playwright/test';

test('seleccionar color en el dropdown', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');

    await page.selectOption('#oldSelectMenu', '4'); // Selecciona la opción purple
    const valor = await page.$eval ('#oldSelectMenu', el => el.value); // Obtiene el valor seleccionado

    expect(valor).toBe('4'); // Verifica que el valor sea '4'
    });