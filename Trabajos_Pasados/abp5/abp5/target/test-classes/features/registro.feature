Feature: Registro de usuario
  Como nuevo usuario
  Quiero registrarme en el sistema
  Para poder iniciar sesión después

  Scenario: Registro exitoso
    Given un nuevo usuario con nombre "Ashley" y contraseña "abcd"
    When el usuario completa el registro
    Then el sistema debería confirmar el registro exitoso

  Scenario: Registro fallido (nombre vacío)
    Given un nuevo usuario con nombre "" y contraseña "1234"
    When el usuario completa el registro
    Then el sistema debería rechazar el registro

