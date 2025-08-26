package com.ejemplo; 
import io.cucumber.java.After; 
import io.cucumber.java.Before; 
public class Hooks { @Before public void setup() { // Este método se ejecuta antes de cada escenario
     System.out.println("=== INICIANDO ESCENARIO ==="); // Aquí podrías inicializar variables, limpiar datos, etc.
     
    } @After public void teardown() { // Este método se ejecuta después de cada escenario 
        System.out.println("=== FINALIZANDO ESCENARIO ==="); // Aquí podrías limpiar estados, cerrar recursos, etc. 
        } }