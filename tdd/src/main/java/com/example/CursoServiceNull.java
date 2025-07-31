package com.example;

import java.util.List;

public class CursoServiceNull {
    public double calcularPromedio(List<Double> notas) {
        if (notas == null ) {
            throw new IllegalArgumentException("La lista de notas no puede ser nula");

    }
    return notas.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
    }

}
