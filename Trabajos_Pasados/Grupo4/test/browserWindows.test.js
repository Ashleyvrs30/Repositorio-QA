const {test, expect} = require('@playwright/test');

test ('Validar botones de nueva pestaña y ventana', async ({page , context}) => {
    
    await page.goto('https://demoqa.com/browser-windows');
    

    //Validar Boton "New Tab"


    const botonNT = page.locator('#tabButton');// Ubica el botón "New Tab" por su ID
    const [paginaTab]= await Promise.all([// Espera a que se abra una nueva pestaña después de hacer clic
        context.waitForEvent('page'), // Espera a que se abra una nueva página
        botonNT.click()           // Clic en el botón

    ]);

    await expect(paginaTab).toHaveURL(/.*sample/); // Verifica que la nueva URL contenga "/sample"
    await expect(paginaTab.locator('h1')).toHaveText('This is a sample page'); // Verifica que el texto del <h1> sea correcto
    await paginaTab.close(); // Cierra la nueva pestaña


    //Validar Boton "New Window"


    const botonNW = page.locator('#windowButton'); // Ubica el botón "New Window"
    const [paginaWindow] = await Promise.all([ // Igual que antes: espera a que se abra una nueva ventana
        context.waitForEvent('page'),
        botonNW.click()

    ]);

    await expect(paginaWindow).toHaveURL(/.*sample/); // Verifica que la nueva ventana tenga la URL esperada
    await expect(paginaWindow.locator('h1')).toHaveText('This is a sample page'); // Verifica el texto del <h1>
    await paginaWindow.close(); // Cierra la nueva ventana


    //Validar Boton "New Window Message"


    const botonMensaje = page.locator('#messageWindowButton'); // Ubica el botón "New Window Message"
    const [paginaMensaje] = await Promise.all([// Este botón abre una ventana que NO tiene URL, es una ventana tipo message
        context.waitForEvent('page'),
        botonMensaje.click()

    ]);

    // Como no carga una URL externa, solo se valida que la ventana se haya abierto
    await expect(paginaMensaje).not.toBeNull(); // Verifica que la ventana efectivamente se abrió
    await paginaMensaje.close(); // Cierra la ventana del mensaje


});