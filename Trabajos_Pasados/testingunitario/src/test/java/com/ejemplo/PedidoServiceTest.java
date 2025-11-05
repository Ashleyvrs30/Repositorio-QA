package com.ejemplo;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


public class PedidoServiceTest {
  public boolean verificarCupos(int cuposMaximos, int cuposOcupados) {
        return cuposOcupados < cuposMaximos;
    }
}