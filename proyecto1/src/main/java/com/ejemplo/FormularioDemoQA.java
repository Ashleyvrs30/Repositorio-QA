package com.ejemplo;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class FormularioDemoQA {
    public static void main(String[] args) throws IOException {
        WebDriver driver = new EdgeDriver();

        // 1. Ir a la página del formulario
        driver.get("https://demoqa.com/text-box");

        // 2. Llenar los campos del formulario
        driver.findElement(By.id("userName")).sendKeys("Fernando Vera");
        driver.findElement(By.id("userEmail")).sendKeys("fernando@test.com");
        driver.findElement(By.id("currentAddress")).sendKeys("Calle Falsa 123");
        driver.findElement(By.id("permanentAddress")).sendKeys("Siempre Viva 742");

        // 3. Hacer clic en el botón de enviar
        driver.findElement(By.id("submit")).click();

        // 4. Tomar captura de pantalla del resultado
        TakesScreenshot ts = (TakesScreenshot) driver;
        File captura = ts.getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(captura, new File("formulario_resultado.png"));

        // 5. Cerrar el navegador
        driver.quit();
    }
}









//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.edge.EdgeDriver;
//
//public class LoginTest {
//    public static void main(String[] args) {
//        WebDriver driver = new EdgeDriver();
//        driver.get("https://demoqa.com/login");
//
//        WebElement usuario = driver.findElement(By.id("userName")); // ID correcto
//        WebElement clave = driver.findElement(By.id("password"));   // ID correcto
//
//        usuario.sendKeys("miUsuario");
//        clave.sendKeys("miClave123");
//
//        driver.findElement(By.id("login")).click(); // ID correcto del botón
//    }
//}


//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.edge.EdgeDriver;
//
//public class GoogleSearch {
//    public static void main(String[] args) {
//        WebDriver driver = new EdgeDriver();
//        driver.get("https://www.google.com");
//        driver.findElement(By.name("q")).sendKeys("Java Selenium");
//        driver.findElement(By.name("q")).submit();
//    }
//}

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.edge.EdgeDriver;
//
//public class App {
//    public static void main(String[] args) {
//        WebDriver driver = new EdgeDriver(); // Inicia Microsoft Edge
//        driver.get("https://www.google.com"); // Abre Google
//    }
//}

//import java.io.FileReader;
//import java.util.List;
//
//import com.google.gson.Gson;
//import com.google.gson.reflect.TypeToken;
//


//import java.util.ArrayList;
//import java.util.List;
//import java.util.Scanner;
//
//public class App {
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        List<String> tareas = new ArrayList<>();
//        int opcion;
//
//        do {
//            System.out.println("\n--- Menú de Tareas ---");
//            System.out.println("1. Agregar tarea");
//            System.out.println("2. Ver tareas");
//            System.out.println("3. Salir");
//            System.out.print("Opción: ");
//            opcion = scanner.nextInt();
//            scanner.nextLine(); // Limpiar buffer
//
//            switch (opcion) {
//                case 1:
//                    System.out.print("Nueva tarea: ");
//                    String tarea = scanner.nextLine();
//                    tareas.add(tarea);
//                    break;
//                case 2:
//                    System.out.println("Tareas:");
//                    for (String t : tareas) {
//                        System.out.println("- " + t);
//                    }
//                    break;
//                case 3:
//                    System.out.println("¡Adiós!");
//                    break;
//                default:
//                    System.out.println("Opción inválida");
//            }
//
//        } while (opcion != 3);
//
//        scanner.close();
//    }
//}
//









//public class App {
//    public static void main(String[] args) {
//        try {
//            Gson gson = new Gson();
//            FileReader reader = new FileReader("datos.json");
//
//            List<Usuario> usuarios = gson.fromJson(reader, new TypeToken<List<Usuario>>(){}.getType());
//
//            for (Usuario u : usuarios) {
//                System.out.println("Nombre: " + u.nombre);
//                System.out.println("Edad: " + u.edad);
//                System.out.println("Correo: " + u.correo);
//                System.out.println("------------");
//            }
//
//        } catch (Exception e) {
//            System.out.println("Error al leer JSON: " + e.getMessage());
//        }
//    }
//}




//import java.util.Scanner;

//import java.util.Arrays;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//public class App {
//    public static void main(String[] args) {
//        List<String> lenguajes = Arrays.asList("Java", "Python", "JavaScript");
//
//        System.out.println("Lenguajes:");
//        for (String lang : lenguajes) {
//            System.out.println("- " + lang);
//        }
//
//        Map<String, String> capitales = new HashMap<>();
//        capitales.put("Francia", "París");
//        capitales.put("Italia", "Roma");
//
//        System.out.println("Capitales:");
//        for (String pais : capitales.keySet()) {
//            System.out.println(pais + " es " + capitales.get(pais));
//        }
//    }
//}
//






//
//public class App {
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//
//        try {
//            System.out.print("Ingresa un número: ");
//            int numero = Integer.parseInt(scanner.nextLine());
//            System.out.println("El número ingresado es: " + numero);
//        } catch (NumberFormatException e) {
//            System.out.println("¡Error! Eso no es un número válido.");
//        } finally {
//            scanner.close();
//        }
//    }
//}

////public class App {
////    public static void main(String[] args) {
////        Persona persona1 = new Persona("Fernando", 30);
////        persona1.saludar();
////    }
//}
