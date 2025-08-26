const {devices, default: test} = require('@playwright/test');

module.exports = {
    testDir: './test', //carpeta donde estan los test
    timeout: 30 * 1000, //timeout global 30 segundos por test
    retries: 1,      //reintentos  1 vez en caso de fallo
    reporter: [['html', { open: 'never' }]], //reporte html ,para este caso no se abre solo

    use: {
        trace : 'on-first-retry', //graba el trace en caso de fallo
        screenshot: 'only-on-failure', //toma screenshot solo si falla
        video: 'retain-on-failure', //graba video solo si falla
        headless: true, //corre el navegador en modo sin cabeza
        viewport: { width: 1280, height: 720 }, //tamaño de la ventana del navegador
        acionTimeout: 10 * 1000, //sin limite de tiempo para las acciones
        ignoreHTTPSErrors: true, //ignora errores de certificado HTTPS
       } ,

       outputDir: 'test-results', //directorio donde se guardan los resultados de los test
         projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] }, //configuracion para el navegador Chromium
            },
            {   name: 'firefox',
                use: { ...devices['Desktop Firefox'] }, //configuracion para el navegador Firefox
            },
            {   name: 'webkit',
                use: { ...devices['Desktop Safari'] }, //configuracion para el navegador Webkit
            },
        ],
};  