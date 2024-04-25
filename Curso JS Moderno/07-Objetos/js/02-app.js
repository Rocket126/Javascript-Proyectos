// objeto literal
const producto = {
    nombre : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//para acceder a las propiedades del objeto usamos el punto o [] corchetes

console.log(producto.nombre);//imprime "monitor 20 pulgadas"

console.log(producto["precio"]);// imprime como entero 300, la propiedad no se ve modificada
//por llevar comillas.

console.log(producto.disponible);//imprime true