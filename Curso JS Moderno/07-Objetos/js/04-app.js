// objeto literal
const producto = {
    nombre : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1mt"
        },
        fabricacion: {
            pais: "china"
        },
        fechafabricacion: "22/99/99"
    } 
}

console.log(producto);
console.log(producto.informacion);

//accediendo a una propiedad del objeto informacion
console.log(producto.informacion.medidas.medida);//imprime "1mt"

console.log(producto.informacion.fabricacion.pais);//accediendo a la propiedad pais usando punto
//imprime "china"