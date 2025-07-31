function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function manejarEnvioFormulario (form,mostrarError) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[name="email"]').value;
        if (!validarEmail(email)) {
            mostrarError('Email inválido');
            //mock que actualiza el contedino de un div
            //para mostrar el mensaje
            } else {
                mostrarError('');//sin error

            }
    });
}

module.exports = { manejarEnvioFormulario, validarEmail };