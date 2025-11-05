// importo fetch para hacer solicitudes HTTP desde Node.js
const fetch = require('node-fetch');//fetch es una API para hacer solicitudes HTTP
// Simulo una llamada a API
async function obtenerDatosUsuario(id) {
    // llamada real a API
    const respuesta = await fetch(`https://api.fake.com/usuarios/${id}`);// Simula una API que devuelve datos de usuario
    const datos = await respuesta.json();
    return datos;
}


// Esta función usa obtenerDatosUsuario internamente
async function mostrarNombreUsuario(id) {
    const usuario = await obtenerDatosUsuario(id);
    return `Nombre: ${usuario.nombre}`;
}


module.exports = { obtenerDatosUsuario, mostrarNombreUsuario };
