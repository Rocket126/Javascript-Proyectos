//METODOS PARA STRINGS

let otroProducto = 'Monitor 20 Pulgadas';

console.log(otroProducto);

//conocer la cantidad de letras de la cadena de texto
console.log(otroProducto.length);//nos dara un total 19 letras contando los espacios.


//El metodo indexOf busca la cadena/palabra indicada en un String. Si la encuentra
//dara la posicion dentro del array/frase que va del indice 0 a N, si no, devolvera -1.
//indexOf es sencible a minusculas y mayusculas. indeOf busca la palabra completa y solo entrega
//el primer indice de esa palabra en la frase.

//aqui devuelve -1 ya que no encuentra la cadena "pulgadas" en minusculas dentro del string.
console.log("Usando indexOf "+ otroProducto.indexOf("pulgadas"));

console.log(otroProducto.indexOf("Pulgadas"));//devuelve el indice 11 de la letra P de la palabra Pulgadas

console.log("buscando 'as' "+ otroProducto.indexOf("as"));//devuelve el indice 17 de la letra a de la palabra "as"

/*Otro metodo es el includes("")
Este metodo devuelve tru o false si encuentra la palabra en la cadena/frase. 
Es sencible a minusculas y mayusculas como indexOf.
*/
console.log(otroProducto.includes("monitor"));//devuelve false
console.log(otroProducto.includes("Monitor"));//devuelve true
console.log(otroProducto.includes("Pulgadas"));//devuelve true

