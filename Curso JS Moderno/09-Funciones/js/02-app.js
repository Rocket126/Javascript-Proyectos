//declaracion de funcion

sumar();//llamada de la funcion
function sumar(/*parametros*/)
{
    console.log(2+2);
}




//Funcion expresiva
//llamando a la funcion antes de asignarle un valor
sumar2();

let sumar2 = function(/* parametros */)
{
    console.log(2+5);
}
//en este ejemplo de la funcion expresiva marcara un error ya que la lectura del codigo
/* por parte de JS primero crea las funciones y variables, en este caso crea la variable, 
pero no posee un valor. 
Ejemplo la lectura es asi
sumar();
let sumar;
sumar = function (){} bla bla bla...

al tener la llamada arriba antes de la funcion y asignacion, JS da error, por ende siempre se 
debe indicar la llamada despues de la funcion. 

Ejemplo Lectura
let sumar;
sumar = function (){} bla bla bla...
sumar();
*/
