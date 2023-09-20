/* 
Las pruebas unitarias son una parte fundamental de la ingeniería de software, tiene como objetivo verificar la funcionalidad de una unidad de código. Vamos a entender por unidad de código a la parte más pequeña que se puede "testear" o probar en una aplicación, por ejemplo:

    - ciclos
    - Funciones
    - Métodos
    - Etc.

Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el código funciona según lo esperado, además nos va a ayudar a encontrar errores de forma más sencilla, para realizar las moficiaciones necesarias sin comprometer el código. 

También nos ayuda a garantizar que el código sigue evolucionando o escalando, permitiendo que las características anteriores sigan funcionando y no se "rompan" con los nuevos cambios.

*/

//Escenario ficticio
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
//Qué pasa si una de mis calificaciones es un valor negativo?