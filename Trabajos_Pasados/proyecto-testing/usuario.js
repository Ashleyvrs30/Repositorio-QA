function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarios = {
        1: { nombre: 'Ana', edad: 30 },
        2: { nombre: 'Luis', edad: 25 }
      };
      const usuario = usuarios[id];

      if (usuario) {
        resolve(usuario);
      } else {
        reject('Usuario no encontrado');
      }
    }, 500);
  });
}

 module.exports = obtenerUsuario;