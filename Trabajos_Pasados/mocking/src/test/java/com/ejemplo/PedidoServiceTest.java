package com.ejemplo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.ArgumentMatchers.anyString;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class PedidoServiceTest {

    @Mock
    ServicioPago servicioPago;

    @Mock
    ServicioRepartidor servicioRepartidor;

    @InjectMocks
    PedidoService pedidoService;

    @Test
    void procesarPedido_exitoso() {
        when(servicioPago.procesarPago("123", 100.0)).thenReturn(true);

        boolean resultado = pedidoService.procesarPedido("123", 100.0, "Calle Falsa 123");

        assertTrue(resultado);
        verify(servicioPago).procesarPago("123", 100.0);
        verify(servicioRepartidor).asignarRepartidor("123", "Calle Falsa 123");
    }

    @Test
    void procesarPedido_pagoRechazado() {
        when(servicioPago.procesarPago(anyString(), anyDouble()))
            .thenThrow(new RuntimeException("Pago rechazado"));

        assertThrows(RuntimeException.class, () -> {
            pedidoService.procesarPedido("456", 200.0, "Av. ramon 742");
        });

        verify(servicioPago).procesarPago("456", 200.0);
        verifyNoInteractions(servicioRepartidor);
    }

    @Test
    void capturarArgumentosRepartidor() {
        when(servicioPago.procesarPago(anyString(), anyDouble())).thenReturn(true);

        pedidoService.procesarPedido("789", 150.0, "Calle Luna 45");

        ArgumentCaptor<String> captorPedido = ArgumentCaptor.forClass(String.class);
        ArgumentCaptor<String> captorDireccion = ArgumentCaptor.forClass(String.class);

        verify(servicioRepartidor).asignarRepartidor(captorPedido.capture(), captorDireccion.capture());

        assertEquals("789", captorPedido.getValue());
        assertEquals("Calle Luna 45", captorDireccion.getValue());
    }
}