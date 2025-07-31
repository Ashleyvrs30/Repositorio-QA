function potencia(base, exponente) {
    return Math.pow(base, exponente);

//el math.pow() es una función de la biblioteca Math de JavaScript
//el mat.pow sirve para calcular potencias de números
}

function raizCuadrada(numero) {
    if (numero < 0) {
        throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
    }
    return Math.sqrt(numero);
//la función Math.sqrt() devuelve la raíz cuadrada de un número
}

module.exports = {potencia, raizCuadrada};
//exportamos las funciones potencia y raizCuadrada para que puedan ser utilizadas en otros archivos