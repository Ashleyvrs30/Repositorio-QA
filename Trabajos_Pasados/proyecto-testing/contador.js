function    crearContador() {
    let valor = 0;

    return {
        incrementar() {
            valor ++;
        },
        obtener: function() {
            return valor;
        }
    };
}
module.exports = crearContador;