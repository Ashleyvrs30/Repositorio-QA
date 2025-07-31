package com.example;
import java.util.List;


public class CursoService {

    
        public double calcularPromedio(List<Double> notas) {
            return notas.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
    }
}
