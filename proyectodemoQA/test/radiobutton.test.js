import {test, expect} from '@playwright/test';

test('seleccionar opcion Yes del radio button', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');

    await page.locator ('label[for="yesRadio"]').click(); // Selecciona la opción "Yes"

    const resultado = await page.locator('.text-success');// Localiza el elemento que muestra el resultado
    await expect(resultado).toHaveText('Yes');// Verifica que el texto sea "Yes"

    });