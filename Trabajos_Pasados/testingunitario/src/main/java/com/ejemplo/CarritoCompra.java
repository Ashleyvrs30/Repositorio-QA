package com.ejemplo;

import java.util.ArrayList;
import java.util.List;

public class CarritoCompra {
    private List<Producto> productos = new ArrayList<>();

    public void agregarProducto(Producto producto) {
        productos.add(producto);
    }

    public double calcularTotal() {
        return productos.stream().mapToDouble(Producto::getPrecio).sum();
    }

    public int cantidadProductos() {
        return productos.size();
    }

    public List<Producto> getProductos() {
        return productos;
    }
}