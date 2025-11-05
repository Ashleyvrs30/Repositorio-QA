package com.ejemplo;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RegistroStepDefinitions {

    private String usuario;
    private String contrasena;
    private boolean registroExitoso;

    @Given("un nuevo usuario con nombre {string} y contraseña {string}")
    public void unNuevoUsuarioConNombreYContrasena(String nombre, String pass) {
        this.usuario = nombre;
        this.contrasena = pass;
    }

    @When("el usuario completa el registro")
    public void elUsuarioCompletaElRegistro() {
        // Simulación: el nombre no puede ser vacío
        if (usuario != null && !usuario.isEmpty()) {
            registroExitoso = true;
        } else {
            registroExitoso = false;
        }
    }

    @Then("el sistema debería confirmar el registro exitoso")
    public void elSistemaDeberiaConfirmarElRegistroExitoso() {
        assertTrue(registroExitoso, "El sistema no confirmó el registro cuando debería.");
    }

    @Then("el sistema debería rechazar el registro")
    public void elSistemaDeberiaRechazarElRegistro() {
        assertFalse(registroExitoso, "El sistema aceptó un registro inválido.");
    }
}
