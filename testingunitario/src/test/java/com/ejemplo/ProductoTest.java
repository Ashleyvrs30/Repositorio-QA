package com.ejemplo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class ProductoTest {

    
    @Test
    void testPedidoConCantidadCeroLanzaExcepcion() {
        PedidoService service = new PedidoService();

        IllegalArgumentException exception = assertThrows(
            IllegalArgumentException.class,
            () -> service.crearPedido("Mouse", 0)
        );

        assertEquals("La cantidad debe ser mayor a cero", exception.getMessage());
    }
}

//@ParameterizedTest
//    @CsvSource({
//        "Mouse, 25.0",
//        "Teclado, 45.5",
//        "Monitor, 200.0"
//    })
//    void testCreacionProducto(String nombre, double precio) {
//        Producto producto = new Producto(nombre, precio);
//
//        assertNotNull(producto);
//        assertEquals(nombre, producto.getNombre());
//        assertEquals(precio, producto.getPrecio());
//    }
//}












//    @Test
//    void testCreacionProductoCorrecto() {
//        Producto producto = new Producto("Mouse", 25.0);
//        assertEquals("Mouse", producto.getNombre());
//        assertEquals(25.0, producto.getPrecio(), 0.01);
//    }
//
//    @Test
//    void testPrecioNegativoLanzaExcepcion() {
//        assertThrows(IllegalArgumentException.class, () -> {
//            new Producto("Monitor", -100.0);
//        });
//    }
//}