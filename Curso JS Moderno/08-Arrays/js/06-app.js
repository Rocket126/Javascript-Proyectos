//Modificando arreglos de forma declarativa e imperativa
// Spread Operator

let producto = [30];

let miObjeto1 = {nombre: "juan", apellido: "reyes"};

let miObjeto2 = {nombre: "pedro", apellido: "contreras"};

//con spread operator se puede unir variables
let resultado = [...producto, miObjeto1];
//en resultado que es un vector por los corchetes, tiene almacenado el valor de producto y un objeto.
//el objeto no es un array pero aun asi es asignado dentro del array resultado. 
//los objetos no se puede usar Rest operator ... javascript da error ya que no es iterable el objeto por ser de un tipo distinto.

console.log(resultado);
// (2)Elementos
//imprime el vector nuevo llamado resultado
// 0: 30
// 1: {nombre: "juan", apellido: "reyes"}

console.log(producto);//imprime solo 30


let vector2 = [40,50,...producto];
console.log(vector2);


let vector3 = [89,63];
//vector2= [...vector3];//aqui sobre escribo el array vector2 y solo tiene valores 89,63
// console.log("dentro de vector2 hay: ",vector2);// 89.63

// si quiero unir lo que contiene vector2 mas vector 3 solo uso spread operator
vector2 = [...vector2,...vector3]; 
console.log("dentro del vector2 hay: ",vector2);

vector4 = [52];
vector2 = [...vector4,...vector2];//aque se une vector4 y vector2 y se asigna a vector2
//creando un solo array con la ayuda de spread operator. 
console.log("vector4 + vector2: ", vector2);




