package com.ejemplo;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


public class CarritoCompraTest {

    
    private CarritoCompra carrito;

    // Se ejecuta ANTES de cada test
    @BeforeEach
    void setUp() {//set up es para inicializar recursos necesarios para los tests
        carrito = new CarritoCompra();
        System.out.println("Nuevo carrito para test");
    }

    // Se ejecuta DESPUÉS de cada test
    @AfterEach
    void tearDown() {//tear down es para limpiar o liberar recursos
        carrito.getProductos().clear();
        System.out.println("Carrito limpiado después del test");
    }


     @Test
    void testAgregarProducto() {
        Producto producto = new Producto("Mouse", 25.0);
        carrito.agregarProducto(producto);
        //CarritoCompra carrito = new CarritoCompra();
        //Producto producto = new Producto("Mouse", 25.0);
        //carrito.agregarProducto(producto);

        assertEquals(1, carrito.cantidadProductos());
        assertTrue(carrito.getProductos().contains(producto));
    }

    @Test
    void testCalcularTotal() {
        CarritoCompra carrito = new CarritoCompra();
        carrito.agregarProducto(new Producto("Mouse", 25.0));
        carrito.agregarProducto(new Producto("Teclado", 45.0));

        assertEquals(70.0, carrito.calcularTotal(), 0.01);
    }
}
    

