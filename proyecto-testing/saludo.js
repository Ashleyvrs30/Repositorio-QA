function saludarConFecha() {
  const ahora = new Date();// Obtiene la fecha y hora actual
  const hora = ahora.getHours();//  Obtiene la hora actual en formato 24 horas


  if (hora < 12) {// Si la hora es menor a 12, es de mañana
    return "Buenos días";
  } else {
    return "Buenas tardes";
  }
}


module.exports = saludarConFecha;