package com.example;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
public class VerificarCuposTest {

    @Test

    void CupoDisponible() {
        VerificarCupos verificarCupos = new VerificarCupos();
        boolean resultado = verificarCupos.verificarCupos(40,35);
        assertTrue(resultado, " Hay Cupos Disponibles ");
}
    @Test
    void CupoNoDisponible() {
        VerificarCupos verificarCupos = new VerificarCupos();
        boolean resultado = verificarCupos.verificarCupos(40,46);
        assertFalse(resultado, " No hay Cupos Disponibles ");
}
    }

 

