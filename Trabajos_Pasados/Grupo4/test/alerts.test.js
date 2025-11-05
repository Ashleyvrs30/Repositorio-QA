//Integrantes del grupo 4:
//-Hugo Seledon  / Desarollador
//-Makarena Bañares /QA
//-Felipe Silva /Programador
//-Antonella Natino/ Programador
//-Ashley Rodriguez /JP


const { test, expect } = require('@playwright/test');


test('Aceptar alerta simple en DemoQA', async ({ page }) => {
  // Ir a la página de alerts
  await page.goto('https://demoqa.com/alerts');


  // Esperar a que aparezca la alerta al hacer clic en el botón
  page.once('dialog', async (dialog) => {
    console.log('Alerta mostrada con mensaje:', dialog.message());
    await dialog.accept(); // Aceptar la alerta
  });


  // Hacer clic en el botón que lanza la alerta
  await page.click('#alertButton');


  // Esperar un poco para confirmar que no hay errores
  await page.waitForTimeout(1000);


  console.log('Alerta aceptada correctamente');
});
