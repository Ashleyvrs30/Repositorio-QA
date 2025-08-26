package com.ejemplo;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.openqa.selenium.WebDriver;

import com.ejemplo.support.DriverFactory;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class StepsLogin {

    private WebDriver driver;

    public StepsLogin() {
        this.driver = DriverFactory.getDriver();
    }

    @Given("que abro la página de Google")
    public void que_abro_la_pagina_de_google() {
        driver.get("https://www.google.com");
    }

    @Then("verifico que el título contiene {string}")
    public void verifico_que_el_titulo_contiene(String tituloEsperado) {
        String titulo = driver.getTitle();
        assertTrue(titulo.contains(tituloEsperado),
            "El título esperado \"" + tituloEsperado + "\" no coincide con \"" + titulo + "\"");
    }
}
