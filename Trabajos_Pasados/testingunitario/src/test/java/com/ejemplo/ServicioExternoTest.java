package com.ejemplo;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import org.junit.jupiter.api.Test;

public class ServicioExternoTest {

    @Test
    void testServicioExternoDisponible() {
        boolean servicioDisponible = simularDisponibilidadServicio();

        // Si esta suposición falla, el test se salta
        assumeTrue(servicioDisponible, "El servicio externo no está disponible, se omite el test");

        // Lógica de prueba si el servicio está disponible
        System.out.println("Ejecutando prueba porque el servicio está disponible");
    }

    private boolean simularDisponibilidadServicio() {
        // Aquí simulamos la disponibilidad (puedes cambiar a false para probar)
        return true;
    }
}
