
const {test, expect} = require('@playwright/test');

test ('Validar las propiedades dinamicas', async ({page}) => {
    
    await page.goto('https://demoqa.com/dynamic-properties');


    // Validar que el botón habilitador esté deshabilitado inicialmente
   const botonHabilitador = page.locator('#enableAfter');
await expect(botonHabilitador).toBeEnabled({ timeout: 10000 }); //Espera que el botón esté deshabilitado

    // Validar que el botón se habilite después de 5 segundos
    await expect(botonHabilitador).toBeEnabled({ timeout: 60000 }); // Espera que el botón se habilite después de 7 segundos

    // Validar que el botón de color cambie de color en 5 segundos
    const colorBoton = page.locator('#colorChange');
    await expect(colorBoton).toHaveCSS('color', 'rgb(220, 53, 69)',{ timeout: 60000 }); // Espera que el color cambie a rojo

    // Validar que el botón de visibilidad cambie a visible en 5 segundos
    const botonVisibilidad = page.locator('#visibleAfter');
    await expect(botonVisibilidad).toBeVisible({timeout: 60000}); // Espera que el botón se vuelva visible
 
 });