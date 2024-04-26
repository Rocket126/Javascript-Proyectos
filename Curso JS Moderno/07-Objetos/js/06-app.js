// objeto literal

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

//aplicando destructuracion

let { nombres, informacion: { medidas: { peso } } } = producto; //crea la variable nombre y le asigna o extrae el valor del nombre del producto.
//luego hace lo mismo con la variable informacion accediendo a todas las propiedades del objeto informacion y 
//asignandolo a la variable de tipo objeto informacion.
//Tanto nombres como medidas se encuentran dentro del objeto padre producto
console.log(nombres);//"monitor 20 pulgadas"


//accediendo a otro objeto interno de otro y sus propiedades
//console.log(medidas);//imprime las propiedades medida y peso del objeto medidas.

console.log(peso)

/* Cuando accedemos a medidas en la sintaxis de arriba decimos que queremos acceder a medidas 
por ende se crea la variable medidas y no informacion. */
//console.log(informacion);
//por lo tanto arrojara el error de que no esta definida ni creada la varible
/* ahora si en la linea 20 creamos aparte la variable informacion para almacenar objeto, esta variable
la separamos con coma, y podremos usarla para acceder a las propiedades ejemplo: 
let { nombres, informacion ,informacion: { medidas } } = producto;*/