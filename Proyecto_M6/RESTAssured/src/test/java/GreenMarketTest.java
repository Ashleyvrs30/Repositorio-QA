
import static org.hamcrest.Matchers.anyOf;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.notNullValue;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;

public class GreenMarketTest {

    @BeforeAll
    static void setup() {
        RestAssured.baseURI = "http://localhost:3000"; // tu JSON Server
    }

    @Test
    @DisplayName("GET - Obtener todos los usuarios")
    void testGetAllUsers() {
        given()
            .when()
            .get("/users")
            .then()
            .statusCode(200)
            .body("$", not(empty()));
    }

    @Test
    @DisplayName("POST - Crear nuevo usuario")
    void testCreateUser() {
        String newUser = """
            {
                "firstName": "Hugo",
                "lastName": "Tester",
                "age": 30
            }
        """;

        given()
            .header("Content-Type", "application/json")
            .body(newUser)
        .when()
            .post("/users")
        .then()
            .statusCode(anyOf(is(200), is(201)))
            .body("firstName", equalTo("Hugo"))
            .body("lastName", equalTo("Tester"))
            .body("id", notNullValue());
    }

    @Test
    @DisplayName("PUT - Actualizar usuario existente")
    void testUpdateUser() {
        String updatedUser = """
            {
                "firstName": "Hugo",
                "lastName": "QA_Actualizado",
                "age": 31
            }
        """;

        given()
            .header("Content-Type", "application/json")
            .body(updatedUser)
        .when()
            .put("/users/1")
        .then()
            .statusCode(200)
            .body("lastName", equalTo("QA_Actualizado"));
    }

    @Test
    @DisplayName("DELETE - Eliminar usuario existente")
    void testDeleteUser() {
        given()
            .when()
          .delete("/users/1")
            .then()
            .statusCode(anyOf(is(200), is(204)));
    }

}
