// Simulo base de datos de usuarios
const usuarios = {
    1: { id: 1, nombre: 'Juan' },
    2: { id: 2, nombre: 'Ana' },
};


// Función asíncrona que simula fetch con delay
async function fetchUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuarios[id]) {
                resolve(usuarios[id]); // usuario encontrado
            } else {
                reject(new Error('Usuario no encontrado')); // si no existe
            }
        }, 100); // simula delay
    });
}


module.exports = fetchUsuario;
