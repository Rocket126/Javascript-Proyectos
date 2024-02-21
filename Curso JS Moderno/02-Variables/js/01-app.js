/*
-Variables en Javascript-
javascript es un lenguaje del tipo dinamico que no necestia declarar un tipo de dato en la 
variable. solo basta con declararle un nombre a la variable y luego darle o no un valor.
Nota: El tipo de dato en js cambiara dependiendo de lo que se almancene en la variable.
En JS no existe el tipado.
*/

var producto = "Monitor de 24 pulgadas";

//cambiamos el valor de la variable producto
producto = "Monitor de 19 pulgadas"

console.log(producto);//mostrar por consola del navegador

//mensaje de alerta 
//alert(producto);

producto = 20;//ahora el valor es numerico. 
/*
Para JS no representa un problema el cambio de tipo en la variable porque JS es un lenguaje 
de tipo dinamico
*/
console.log(producto);

//variable sin valor
var disponible;

disponible = "true";
disponible= "false";

/*
Una variable puede contener letras, guiones bajos o numeros en su comienzo, pero no puden llevar
en su comienzo un numero.
var 19disponible => no esta bien
var 99dias => no esta bien
var 01_ = no esta bien

MODO CORRECTO
var _01;
var dias99;
var disponible19
var _disponible19
*/

//Regla de JS 
/* los nombres de variables de llevar una mayuscula si se componen de dos nombres. 
Esto se llama camelCase, ejemplo var nombreProducto. 
para las clases en objetos se debe usar la mayuscula en un inicio.
*/

var nombreProducto;//esta manera se llama camelCase
var nombreProductoCategoriaPrecio// camelCase

var nombre_producto//underscore

