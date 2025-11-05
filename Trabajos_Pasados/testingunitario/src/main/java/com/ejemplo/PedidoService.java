package com.ejemplo;

public class PedidoService {
      public void crearPedido(String nombreProducto, int cantidad) {
        if (cantidad <= 0) {
            throw new IllegalArgumentException("La cantidad debe ser mayor a cero");
        }
    }

    public boolean verificarCupos(int cuposMaximos, int cuposOcupados) {
        return cuposOcupados < cuposMaximos;
    }
}