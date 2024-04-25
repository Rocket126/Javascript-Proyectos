// objeto literal
const producto = {
    nombre : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
  
}

//agregando nuevas propiedaes al objeto utilizando el punto
producto.imagen = "imagen.jpg";
//al estar fuera del objeto se utiliza el operador igual para crear la nueva propiedad.


console.log(producto);

//eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);