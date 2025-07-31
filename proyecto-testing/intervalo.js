function repetirCadaSegundo(callback) { // Ejecuta un callback cada 1 segundo usando setInterval
  const id = setInterval(() => { // Inicia un intervalo que llama al callback cada 1000ms (1s)
    callback();
  }, 1000);

  return id; // Retorna el ID del intervalo por si se quiere detener más adelante
}

module.exports = repetirCadaSegundo; // Exporta la función para usarla en otros módulos
