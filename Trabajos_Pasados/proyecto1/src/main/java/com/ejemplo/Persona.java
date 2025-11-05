package com.ejemplo;
//import javax.swing.JOptionPane;
//import java.util.Scanner;
//import javax.swing.JOptionPane;
//import java.util.ArrayList;
//import java.util.List;
//public class Persona {
//    String nombre;
//    int edad;
//
//    public Persona(String nombre, int edad) {
//        this.nombre = nombre;
//        this.edad = edad;
//    }
//
//    public void saludar() {
//        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años.");
//    }
//}
//
//












//
//public class App {
//    public static void main(String[] args) {
//        // Arreglo tradicional
//        String[] frutas = {"Manzana", "Banana", "Cereza"};
//        System.out.println("Frutas (array):");
//        for (String fruta : frutas) {
//            System.out.println("- " + fruta);
//        }
//
//        // Lista (ArrayList)
//        List<String> colores = new ArrayList<>();
//        colores.add("Rojo");
//        colores.add("Verde");
//        colores.add("Azul");
//
//        System.out.println("Colores (ArrayList):");
//        for (String color : colores) {
//            System.out.println("- " + color);
//        }
//    }
//}























//public class App{
//    public static void main(String[] args) {
//        int numero = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));
//        do{ 
//            numero ++;
//            System.out.println("estas en la linea # "+numero );
//        }while ( numero<10 ) ;
//             }
//              }
//          
//
//
//

  //      int numero = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));
  //      while ( numero<10 ) {
  //         numero ++;
  //         System.out.println("estas en la linea # "+numero );
  //          
  //      }
  //       }























 //       switch (numero) {
 //           case 1:
 //               JOptionPane.showMessageDialog(null, "El valor es 1");
 //               break;
 //           case 2:
 //               JOptionPane.showMessageDialog(null, "El valor es 2");
 //               break;
 //           case 3:
 //               JOptionPane.showMessageDialog(null, "El valor es 3");
 //               break;
 //           case 4:
 //               JOptionPane.showMessageDialog(null, "El valor es 4");
 //               break;
 //           case 5:
 //               JOptionPane.showMessageDialog(null, "El valor es 5");
 //               break;
 //           default:
 //               JOptionPane.showMessageDialog(null, "Es otro numero");
 //               break;
 //       }
 //   }



   //     int tabla= Integer.parseInt(JOptionPane.showInputDialog("QUE tabla necesitas"));
   //     for (int num=1; num <=10; num ++){
   //         System.out.println(num + " x " + tabla + "=" + (num * tabla));
//
//
   //     }
   //     
   // }
   //  }





//    public static void main(String[] args) {
//        int numero = 8;
//        String letra="a";
//        if(letra =="a" && numero == 0){
//            JOptionPane.showMessageDialog(null,"las dos condiciones son verdaderas");
//        }else if(letra == "a"  || numero == 0){
//            JOptionPane.showMessageDialog(null,"una de las condiciones es verdadera");
//        }else{
//            JOptionPane.showMessageDialog(null, "ninguna condicion es verdadera");
//        }
//    }
//}
//


 //   public static void main(String[] args) {
 //       int numero = 6;
 //       if(numero > 5){
 //           JOptionPane.showMessageDialog(null,"es mayor");
//
 //       }else{
 //           JOptionPane.showMessageDialog(null, "es menor");
 //       }
 //   }
 //   }
//



//  void MiFuncion(String nombre,int edad) {
// JOptionPane.showConfirmDialog(null, "Tu nombre es: " +nombre+" y tu edad es: "+edad);
//    }
//
//    public static void main(String[] args) {
//        App fu = new App();
//        fu.MiFuncion("Fernando" ,50);
//
//    }
//}
//
////public class App{
////    public static void main(String[] args) {
////        
//    Scanner scanner=new Scanner(System.in);
//    int option = 0;
//     
//    while (option !=3){
//        System.out.println("1.Saludar");
//        System.out.println("2.Sumar dos numero");
//        System.out.println("3.Salir");
//        System.out.println("Elige una opcion");
//        option=scanner.nextInt();
//
//        switch (option) {
//            case 1:
//            System.out.println("Hola usuario");
//            break;
//            case 2:
//            System.out.println("Numero 1: ");
//            int a=scanner.nextInt();
//            System.out.println("Numero 2: ");
//            int b=scanner.nextInt();
//            System.out.println("Resultado: "+(a + b));
//            break;
//            case 3:
//            System.out.println("Saliendo del programa...");
//            break;
//                default:
//                    System.out.println("Opción no válida. Intenta de nuevo.");
//        }
//
//    }
//    
//}
//
//
//}
//
//
//




//public class   App {
//    void MiFuncion(int num1,int num2){
//        //int num1=10;
//        //int num2=20;
//        JOptionPane.showConfirmDialog(null,num1+ num2 );
//
//    }
//   // void Funcion2(){
//   //     MiFuncion();
//   //     JOptionPane.showConfirmDialog(null,"Hola,Soy la funcion 2");
//   // }
//    public static void main(String[] args) {
//        App fu=new App();
//        fu.MiFuncion(10, 20);
//    }
//    
//}
//
//
//
//


/**
 * Hello world!
 *
 */
//public class App 
//{
  //  public static void main( String[] args )
    //{int resultado = sumar(5,7);


//int contador = 1;
//while (contador<= 3){
  //  System.out.println("contador"+contador);
//contador ++;
//}
    
    //for(int i = 1;i <=5 ;i++){

//System.out.println("repeticion "+ i);
 //}
   
//}
//public static int sumar(int a, int b) {
//    return a+b;
//    System.out.println("el resultado es"+ resultado);
//    
//    
//}
//}

//mvn exec:java "-Dexec.mainClass=com.ejemplo.App"
