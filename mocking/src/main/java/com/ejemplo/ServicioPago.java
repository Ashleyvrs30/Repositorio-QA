package com.ejemplo;

public interface ServicioPago {
    boolean procesarPago(String pedidoId, double monto);
}