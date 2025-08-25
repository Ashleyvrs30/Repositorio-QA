package com.ejemplo.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CrossBrowserEdgeTest {

    WebDriver driver;

    @BeforeMethod
    public void setup() {
        // Configurar EdgeDriver local (actualiza la ruta si es diferente)
        System.setProperty("webdriver.edge.driver", "C:\\Program Files\\WebDriver\\Edge\\msedgedriver.exe");

        // Configuración de Edge en modo headless (opcional, puedes descomentar)
        EdgeOptions options = new EdgeOptions();
        // options.addArguments("--headless");  // descomenta si quieres que no se abra la ventana
        options.addArguments("--disable-gpu");
        options.addArguments("--window-size=1920,1080");

        driver = new EdgeDriver(options);
    }

    @Test
    public void testAbrirGoogle() {
        // Abrir Google
        driver.get("https://www.google.com");

        // Verificar título
        String title = driver.getTitle();
        System.out.println("Título de la página: " + title);
        Assert.assertTrue(title.contains("Google"), "El título no contiene 'Google'");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
