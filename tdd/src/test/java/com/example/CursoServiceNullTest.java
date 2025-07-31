package com.example;

import java.util.List;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertThrows;



public class CursoServiceNullTest {
@test
    public void promedioListNula_lanzaExcepcion() {
        CursoServiceNull cursoServiceNull = new CursoServiceNull();
        List<Double> notas = null;
        

        assertThrows(IllegalArgumentException.class, () -> {
            curso.calcularPromedio(notas);
        }, " no puede ser nula");
    }
}
