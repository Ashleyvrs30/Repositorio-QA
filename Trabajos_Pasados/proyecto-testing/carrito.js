function agregarProducto(carrito,producto) {  
   carrito.push(producto);
   // return carrito;
}       
function vaciarCarrito(carrito) {
    carrito.length = 0;
   // return carrito;
}   

module.exports = {agregarProducto, vaciarCarrito};

