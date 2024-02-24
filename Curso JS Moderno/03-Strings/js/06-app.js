let producto = "monitor 20 pulgadas";

//El metodo repeat() repite las de veces que sea necesario un string si se le indica entre parentesis

let texto = "En promocion ".repeat(3);//repite 3 veces la cadena y la almacena.

console.log(texto);//imprime "En promocion En promocion En promocion" en una sola linea

console.log(`${producto}       ${texto}`);//concatena lo que hay en producto mas en texto e imprime.


//Metodo split permite dividir un string. en un arreglo.
//una cadena ya es un arreglo/vector pero split ayuda a separa una cadena por espacios si se lo pedimos.

let actividad = "Estoy aprendiendo JS moderno";

//dentro de split le indicamos que separe por espacios la cadena y crea un vector.
console.log(actividad.split(" "));//imprime: (4) ['Estoy', 'aprendiendo', 'JS', 'moderno']

let tamano = actividad.split(" ").length;//obtenemos el tamaño del vector
console.log(tamano);//imprime: 4


let hobbies = "Leer,caminar,escuchar musica, escribir,aprender a programar";
console.log(hobbies.split(","));//separa por comas y crea el vector con las palabras.

let tweet = "Aprendiendo Javascript #JSModerno";
console.log(tweet.split("#"));