package com.example;


import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class CursoServiceTest {
    
    @Test
    public void CalcularPromedio(){
        CursoService cursoService = new CursoService();
        List<Double> notas = Arrays.asList(7.0, 5.5, 2.3);
        double promedio = cursoService.calcularPromedio(notas);
        assertEquals(4.9, promedio, 0.1);
    
}

  
}
