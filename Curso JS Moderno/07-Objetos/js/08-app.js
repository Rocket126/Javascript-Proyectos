"use strict";//Es utilizado para congelar un objeto para que no sea modificable.

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

//Object methods metodos de objetos

Object.freeze(producto);//Aqui en esta linea indicamos que congelaremos el objeto producto
//no sera modificable, no se podra crear/asignar propiedades, no se podra eliminar propiedades.


//producto.disponible = false;//no se puede asignar el nuevo valor a la propiedad de solo lectura "disponible"

//producto.imagen = "imagen.jpg";//No se puede agregar la propiedad imagen, el objeto no es extensible

//delete producto.precio;//no se puede eliminar la propiedad "precio" del objeto