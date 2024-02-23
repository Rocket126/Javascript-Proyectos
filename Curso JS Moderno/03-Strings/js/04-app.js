let oracion = "          monitor 20 pulgadas            "; 

console.log(oracion.length);//imprime el largo de la cadena contando los espacios 

//para eliminar los espacios en blanco al inicio y al final usamos metodos trimStar y trimEnd
//trimStar elimina los espacios en el inicio
console.log(oracion.trimStart());

console.log(oracion.trimStart().length);//Imprime el largo actual de la oracion recortada.

console.log(oracion.trimEnd());//Imprime la oracion sin los espacios al final de ella.

//Ahora recortamos de una sola vez al inicio y al final
console.log(oracion.trimStart().trimEnd());

//tambien existe el trim() a secas que elimina de una sola vez al final y al inicio
console.log(oracion.trim());


