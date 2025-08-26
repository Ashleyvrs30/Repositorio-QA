const { test, expect } = require('@playwright/test');
const path = require('path');


test('Subir imagen en DemoQA Upload/Download', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');


  // Ruta absoluta del archivo de imagen a subir
  const filePath = path.join(__dirname, 'test-image.jpg'); // Asegúrate de que exista


  // Cargar archivo en el input
  await page.setInputFiles('#uploadFile', filePath);


  // Verificar que el nombre del archivo aparece luego de subirlo
  const uploadedFile = page.locator('#uploadedFilePath');
  await expect(uploadedFile).toBeVisible();
  await expect(uploadedFile).toContainText('test-image.jpg');
});
