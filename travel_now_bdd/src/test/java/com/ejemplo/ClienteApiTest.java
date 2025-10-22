package com.ejemplo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.lessThan;
import static org.hamcrest.Matchers.notNullValue;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

class ClienteApiTest {

    @BeforeAll
    static void setup() {
        // Base pública de ReqRes
        RestAssured.baseURI = "https://reqres.in/api";
        // Evita problemas de SSL en entornos corporativos
        RestAssured.useRelaxedHTTPSValidation();
    }

    

    // 1. GET – Verificación de existencia de usuario
    @Test
    void testGetClientePorId() {
        Response response =
            given()
                .log().all()
                .when()
                .get("/users/2")
                .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .time(lessThan(2000L))
                .extract().response();

        assertThat(response.jsonPath().getInt("data.id")).isEqualTo(2);
        assertThat(response.jsonPath().getString("data.email")).contains("@reqres.in");
    }

    // 2. GET – Usuario inexistente (404)
    @Test
    void testGetUsuarioInexistente() {
        given()
            .log().all()
            .when()
            .get("/users/23")
            .then()
            .log().all()
            .statusCode(404)
            .time(lessThan(2000L));
    }

    // 3. POST – Registro exitoso
    @Test
    void testRegistroExitoso() {
        String body = "{ \"email\": \"ashley@reqres.in\", \"password\": \"abcd123\" }";

        Response response =
            given()
                .log().all()
                .contentType(ContentType.JSON)
                .body(body)
                .when()
                .post("/register")
                .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .time(lessThan(2000L))
                .body("id", notNullValue())
                .body("token", notNullValue())
                .extract().response();

        assertThat(response.jsonPath().getInt("id")).isPositive();
        assertThat(response.jsonPath().getString("token")).isNotEmpty();
    }

    // 4. POST – Registro fallido (falta password)
    @Test
    void testRegistroFallido() {
        String body = "{ \"email\": \"ashleyy@fife\" }";

        given()
            .log().all()
            .contentType(ContentType.JSON)
            .body(body)
            .when()
            .post("/register")
            .then()
            .log().all()
            .statusCode(400)
            .contentType(ContentType.JSON)
            .body("error", equalTo("Missing password"))
            .time(lessThan(2000L));
    }

    // 5. PUT – Modificación de cargo de usuario
    @Test
    void testModificarCargoUsuario() {
        String body = "{ \"name\": \"ashley\", \"job\": \"trabajo\" }";

        Response response =
            given()
                .log().all()
                .contentType(ContentType.JSON)
                .body(body)
                .when()
                .put("/users/2")
                .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .time(lessThan(2000L))
                .extract().response();

        assertThat(response.jsonPath().getString("job")).isEqualTo("trabajo");
        assertThat(response.jsonPath().getString("name")).isEqualTo("ashley");
    }

    // 6. DELETE – Eliminación de usuario
    @Test
    void testEliminarUsuario() {
        given()
            .log().all()
            .when()
            .delete("/users/2")
            .then()
            .log().all()
            .statusCode(204)
            .time(lessThan(2000L));
    }

    // 7. Validación de headers y performance
    @Test
    void testValidarHeaders() {
        given()
            .log().all()
            .when()
            .get("/users/2")
            .then()
            .log().all()
            .statusCode(200)
            .header("Content-Type", containsString("application/json"))
            .header("Server", notNullValue())
            .time(lessThan(2000L));
    }
}
