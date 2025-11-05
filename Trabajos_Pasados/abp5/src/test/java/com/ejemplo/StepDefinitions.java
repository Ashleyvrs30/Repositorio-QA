package com.ejemplo;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitions {

    private String usuarioIngresado;
    private String contrasenaIngresada;
    private boolean acceso;

    @Given("el usuario ingresa su nombre {string}")
    public void elUsuarioIngresaSuNombre(String usuario) {
        this.usuarioIngresado = usuario;
    }

    @Given("el usuario ingresa su contraseña {string}")
    public void elUsuarioIngresaSuContrasena(String contrasena) {
        this.contrasenaIngresada = contrasena;
    }

    @When("el sistema valida las credenciales")
    public void elSistemaValidaLasCredenciales() {
        // Simulación sencilla de validación:
        acceso = "admin".equals(usuarioIngresado) && "1234".equals(contrasenaIngresada);
    }

    @Then("el usuario debería tener acceso")
    public void elUsuarioDeberiaTenerAcceso() {
        assertTrue(acceso, "El usuario no pudo iniciar sesión con credenciales correctas.");
    }

    @Then("el usuario no debería tener acceso")
    public void elUsuarioNoDeberiaTenerAcceso() {
        assertFalse(acceso, "El sistema permitió acceso con credenciales incorrectas.");
    }
}
