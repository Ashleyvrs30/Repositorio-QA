#  Proyecto: Validación de API – GreenMarket  

Este proyecto forma parte del **Módulo 6: Pruebas de Servicios Web**, donde se aplicaron los conceptos de **validación, automatización y testing de APIs REST** utilizando herramientas profesionales como **Postman**, **Newman** y **REST Assured**.  

El objetivo principal fue verificar el correcto funcionamiento de los **endpoints** de la API de *GreenMarket*, una plataforma ficticia de productos ecológicos, asegurando su **funcionalidad, estabilidad y cumplimiento de respuestas esperadas**.  
---

## 🎯 Objetivos del proyecto  

- Comprender la estructura y los métodos fundamentales de una **API REST** (CRUD: Create, Read, Update, Delete).  
- Diseñar y ejecutar **pruebas manuales y automatizadas** sobre los endpoints.  
- Implementar **aserciones** para validar el código de estado, encabezados y contenido del cuerpo de las respuestas.  
- Automatizar la ejecución de pruebas mediante **Postman**, **Newman** y **REST Assured**.  
- Documentar los resultados y generar **reportes de validación y evidencias de ejecución**.  

---

## ⚙️ Descripción técnica  

En esta práctica se realizó el **diseño y ejecución de pruebas sobre una API REST**, utilizando **Postman** para las pruebas manuales y **Newman** para la ejecución automatizada desde la línea de comandos.  

Se configuró un entorno con **variables reutilizables** y se construyó una **colección que implementa el ciclo CRUD completo** (Crear, Leer, Actualizar y Eliminar un usuario). Cada solicitud incluye **validaciones automáticas** mediante scripts en la pestaña *Tests*, lo que permite comprobar el código de respuesta, los encabezados y el contenido devuelto por la API.  

Finalmente, la colección se ejecutó con **Newman**, generando un **reporte en formato HTML** que resume los resultados de la ejecución, evidenciando que las pruebas fueron exitosas y que los endpoints respondieron de manera correcta.  

---
## 💻 Automatización con REST Assured  

Para complementar las pruebas realizadas en Postman, se implementó una **suite automatizada en Java** utilizando **REST Assured**, en conjunto con **JUnit** y **Hamcrest**.  

El archivo `pom.xml` fue configurado con las dependencias necesarias para la automatización, permitiendo una estructura modular y escalable. Se desarrollaron pruebas sobre los métodos **GET**, **POST**, **PUT** y **DELETE**, con el propósito de validar el ciclo CRUD y asegurar que la API devolviera los resultados esperados.  

Las pruebas se ejecutaron mediante los siguientes comandos:  

```bash
mvn test  
mvn -Dtest=GreenMarketTest test


---

Conclusión

El desarrollo de este proyecto permitió aplicar de manera práctica los conocimientos adquiridos en el módulo, fortaleciendo las competencias en validación de APIs REST, automatización de pruebas y aseguramiento de la calidad de software.Donde a través del uso de herramientas como Postman, Newman y REST Assured, se logró implementar un flujo de pruebas completo y documentado que demuestra la importancia de la automatización .