package com.ejemplo;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

// Suite de pruebas para ejecutar todas juntas
@Suite
@SelectClasses({
        CarritoCompraTest.class,
        ProductoTest.class,
        PedidoServiceTest.class,
        ServicioExternoTest.class
})
public class TodasLasPruebasSuite {
}
