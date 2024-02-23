let oracion ="Monitor 20 pulgadas";

console.log(oracion);

//usando metodo .replace(,). 
//Este metodo reemplaza palabras o cadenas indicando la palabra dentro de la oracion a reemplazar seguido
//de la cadena nueva despues de la coma.
//Este metodo es sencible a las mayusculas y minusculas por lo cual si la palabra original esta en mayusculas,
//en el replace al ingresarla debe estar escrita igual para reemplazar.

console.log(oracion.replace("pulgadas",'"'));//reemplaza la palabra pulgadas con la cadena comilla (").

console.log(oracion.replace("Monitor","Monitor curvo"));//imprime "Monitor curvo 20 pulgadas"

console.log(oracion.replace("monitor","Monitor curvo"));//Palabra "monitor" en minusculas. No funcionara el reemplazo.

//METODO SLICE()
//Metodo cortar o extraer cadenas. Este metodo se le indica desde un incio de corte hasta el final de corte.
//de 0 a N indice. Imprime lo recortado.

console.log(oracion.slice(0,7));//imprime "Monitor". Monitor contiene 7 letras

//Si se le indica un solo numero, slice cortara hasta el final indicado como posicion 8. Asume que hay un 0 por si mismo.
//y deja a fuera lo recortado.
console.log(oracion.slice(8));//recorta hasta la cadena 8 de la oracion. Imprime "20 pulgadas"
console.log(oracion.slice(0,1));


//OTRO METODO PARECIDO PERO NO IGUAL ES SUBSTRING()
//se le indica un inicio y final para recortar una cadena.
console.log(oracion.substring(0,8));//imprime "monitor"

//si se invierte la el indice, uno mayor por uno menor, cortara al reves.
console.log(oracion.substring(2,1));//imprime "o" ya que invierte los numeros, va de la indice 1 al indice 2 dejando fuera el ultimo.

console.log(oracion.charAt(11));//imprime "p"



