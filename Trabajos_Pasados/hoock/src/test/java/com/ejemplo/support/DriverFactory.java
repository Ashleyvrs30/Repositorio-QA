package com.ejemplo.support;

import org.openqa.selenium.WebDriver;

public class DriverFactory {
    private static WebDriver driver;

    // Devuelve el driver existente o lo crea si no existe
    public static WebDriver getDriver() {
        return driver;
    }

    // Asigna un driver (desde Hooks)
    public static void setDriver(WebDriver newDriver) {
        driver = newDriver;
    }

    // Cierra el driver y limpia la referencia
    public static void cleanup() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }
}
