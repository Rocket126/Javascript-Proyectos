//metodo seal (sellar)
//Este metodo bloquea el objeto para que no puedan ser eliminadas o insertadas nuevas propiedades
//pero si pueden modificar los valores de estas.

"use strict"

const producto = {
    nombres : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1mt"
        },
        fabricacion: {
            pais: "china"
        }
    } 
}

Object.seal(producto);//sellamos el objeto usando el metodo seal

// producto.imagen = "imagen.jpg"; No se puede agregar la propiedad ya que el objeto no es extensible

//producto.disponible = false; si se puede modificar el valor aun estando sellado

//delete producto.nombres; no se puede eliminar una propiedad al estar sellado el objeto (seal)

console.log(Object.isSealed(producto));//indica verdadero si el objeto esta sellado

console.log(producto);