
Feature: Login en SmartOrders
  Como usuario del sistema
  Quiero poder iniciar sesión con mis credenciales
  Para acceder a mis pedidos y productos

  Scenario: Login exitoso con credenciales válidas
    Given el usuario está en la página de login
    When ingresa su nombre de usuario "admin" y contraseña "1234"
    Then el sistema muestra el mensaje "Bienvenido admin"

  Scenario: Login fallido con credenciales incorrectas
    Given el usuario está en la página de login
    When ingresa su nombre de usuario "admin" y contraseña "0000"
    Then el sistema muestra el mensaje "Credenciales inválidas"
