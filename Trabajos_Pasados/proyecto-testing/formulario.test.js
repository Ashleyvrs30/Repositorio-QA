const {validarEmail, manejarEnvioFormulario} = require('./formulario');

test ('validarEmail con email válido', () => {
    expect(validarEmail('ejemplo@dominio.com')).toBe(true); 
});

test ('validarEmail con email inválido', () => {
    expect(validarEmail('invalido.com')).toBe(false);
   // expect(validarEmail('ejemplo@.com')).toBe(false);
    //expect(validarEmail('ejemplo.com')).toBe(false);
});

test('manejarEnvioFormulario muestra error para email inválido', () => {
  document.body.innerHTML = `
    <form id="form">
      <input type="text" name="email" value="invalido.com" />
      <button type="submit">Enviar</button>
    </form>
    <div id="error"></div>
  `;

    const form = document.getElementById('form');
    const errorDiv = document.getElementById('error');

    function mostrarError(msg) {
        errorDiv.textContent = msg;
    }
    manejarEnvioFormulario(form, mostrarError);

    //simula encio del formulario con dispacthevent para disparar la validacion
    form.dispatchEvent(new Event('submit', { bubbles: true , cancelable: true }));

    //veridicacos que el mensaje de error aparece correctamente
    expect(errorDiv.textContent).toBe('Email inválido');
});