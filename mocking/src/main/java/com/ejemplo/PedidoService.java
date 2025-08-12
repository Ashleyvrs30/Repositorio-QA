package com.ejemplo;

public class PedidoService {
    private final ServicioPago servicioPago;
    private final ServicioRepartidor servicioRepartidor;

    public PedidoService(ServicioPago servicioPago, ServicioRepartidor servicioRepartidor) {
        this.servicioPago = servicioPago;
        this.servicioRepartidor = servicioRepartidor;
    }

    public boolean procesarPedido(String pedidoId, double monto, String direccion) {
        if (servicioPago.procesarPago(pedidoId, monto)) {
            servicioRepartidor.asignarRepartidor(pedidoId, direccion);
            return true;
        }
        return false;
    }
}