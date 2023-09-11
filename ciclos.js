/*
Estructura de control: controlar la ejecucion de codigo


ciclos o bucles (loop)

tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

es importante usar ciclos para automatizar tareas repetitivas

en JS los siguientes ciclos:

-while
-do  while
-for

Iterar: procesos de repetir por secuiencia de instrucciones
Estructura de control:  herramientas especiales para crear algoritmos o programas mas dinamicos y flexibles

*/

//While: ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada iteracion.

/**

while (condition) {
    
}
 */
let miCrushMeQuiere = false;
while (miCrushMeQuiere) {
    console.log("Sere feliz");
}

/*
Nota esto significa peligro. Esto es un ciclo sin fin (infinito), porque la condicion que se evalua siempre es true, significa que no hay nada que nos diga que se va a detener

while(true){

}


analogia: seeguir una receta para preparar sopa

lista de ingredientes:
    -Zanahoria
    -Papas
    -Chayote
    -Limon
    -Agua
    -Espinaca


Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

Paramos cuando ya no tengamos ingredientes
*/


//ejemlo de un consultorio dental

let capacidadPacientes = 10;
let pacientesEnConsultorio = 1;

//mientras 15 sea menor que 50
while (pacientesEnConsultorio < capacidadPacientes) {
    //seguire dando servicio
    console.log("Seguimos dando servicio " + pacientesEnConsultorio);
    //aumenta en uno mis pacientes
    pacientesEnConsultorio++;

}
//Mientras sea verdadero, se ejecuta la instruccion (piden permido para ir a una fiesta)


/**
Do while (hacer mientras)
//se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta)


El bucle do while se diferencia del shilw ya que aqui se ejecuta la instruccion al menos una vez, y luego pregunta para saber si se sigue ejecutando o no.

do{
    //codigo a ejecutar
}while(condicion);

analogia: cuando preparamos un pastel
 */


//Ejemplo de un consultorio dental

var contadorPacientes = 0;

do {
    var nombre = prompt("Ingresa el nombre del paciente");
    if (nombre) {
        contadorPacientes++;
    }

} while (contadorPacientes < 5 && confirm("¿Desea registar otro paciente?"));

console.log("Numero total de pacientes: ", contadorPacientes);

/**

For(para)

Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar 
Consiste de 3 partes fundamentales:

    -Inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (Variable de inicio)
    -condicion: es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    -expresion de iteracion (contador): tienela finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for(inicializacion; condicion; expresion de iteracion){
        bloque de codigo a ejecutar
    }



 */
let cantidadDeCitasDiarias = 5;
for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt("Ingresa el nombre del paciente " + i);
    console.log("Paciente con cita " + i);
}   