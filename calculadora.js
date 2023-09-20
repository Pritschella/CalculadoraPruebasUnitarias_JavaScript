/* 
Las pruebas unitarias son una parte fundamental de la ingeniería de software, tiene como objetivo verificar la funcionalidad de una unidad de código. Vamos a entender por unidad de código a la parte más pequeña que se puede "testear" o probar en una aplicación, por ejemplo:

    - ciclos
    - Funciones
    - Métodos
    - Etc.

Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el código funciona según lo esperado, además nos va a ayudar a encontrar errores de forma más sencilla, para realizar las moficiaciones necesarias sin comprometer el código. 

También nos ayuda a garantizar que el código sigue evolucionando o escalando, permitiendo que las características anteriores sigan funcionando y no se "rompan" con los nuevos cambios.

*/

/*Escenario ficticio
function promedio(cal1, cal2, cal3) {
    let promedio = cal1 + cal2 + cal3 / 3; //formula báscia para calcular un promedio
}

//Ciclo para calcular aprobado o reprobado
if (promedio >= 6) {
    console.log("Felicidades, aprobaste");
} else {
    console.log("Necesitas estudiar más, estás reprobado(a)");
}

promedio(0, 1, -8); //Promedio 7

//Qué pasa si no regreso las tres calificaciones
//Qué sucede so ima de estas calificaciones es un valor no numérico?
//Qué pasa si una de mis calificaciones es un valor negativo? */

//Creamos una calculadora básica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicación, división) para trabajar con pruebas unitarias

//Suma
function suma(num1, num2) {
    return num1 + num2;
}

//Resta
function resta(num1, num2) {
    return num1 - num2;
}

//Multiplicación
function multiplicacion(num1, num2) {
    return num1 * num2;
}

//División
function division(num1, num2) {
    return num1 / num2;
}

/*
Para manejar nuestras pruebas unitarias, utilizamos JEST

    - JUnit (Java)
    - NUnit (.NET)
    - pytest (Python)
    - JEST (JS)

JEST es un marco de pruebas de JS mantenido por Fb, enfocado a hacer pruebas unitarias de la forma más simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones: 

*/

module.exports = { suma, resta, multiplicacion, division };