package com.ejemplo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;

import com.ejemplo.support.DriverFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks {

    @Before
    public void openBrowser() {
        WebDriverManager.edgedriver().setup();
        EdgeOptions options = new EdgeOptions();
        options.addArguments("--start-maximized");

        WebDriver driver = new EdgeDriver(options);
        DriverFactory.setDriver(driver);

        driver.get("https://www.saucedemo.com/");
    }

    @After
    public void closeBrowser() {
        DriverFactory.cleanup();
    }
}
