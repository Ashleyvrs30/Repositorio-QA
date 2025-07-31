function sumarLista(lista) {
    return lista.reduce((total, valor)=> total + valor, 0)   ;
}
module.exports = sumarLista;
