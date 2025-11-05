const { test, expect } = require('@playwright/test');


test('Abrir y cerrar Small Modal en DemoQA', async ({ page }) => {
  // Paso 1: Ir a la página de modales
  await page.goto('https://demoqa.com/modal-dialogs');


  // Paso 2: Hacer clic en el botón "Small Modal"
  await page.click('#showSmallModal');


  // Paso 3: Verificar que el modal esté visible
  const modalTitle = page.locator('.modal-title');
  await expect(modalTitle).toBeVisible();
  await expect(modalTitle).toHaveText('Small Modal');


  // Paso 4: Cerrar el modal
  await page.click('#closeSmallModal');


  // Paso 5: Verificar que el modal ya no esté visible
  await expect(modalTitle).toBeHidden();


  console.log('Small Modal abierto y cerrado correctamente');
});
