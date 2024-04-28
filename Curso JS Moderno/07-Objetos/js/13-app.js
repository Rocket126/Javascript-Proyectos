const producto = {
    nombres : "Plancha",
    precio : 1000,
    disponible : true
}

//viendo metodos de objetos keys


// object keys devuel un arreglo en este caso del objeto en cuestion
//asi obtengo las propiedades del objeto como un vector, solo sus nombres de las propiedades, no sus valores.
console.log(Object.keys(producto));
// 0: nombres
// 1: precio
// 2: disponible


// con object values obtiene los valores de las propiedades en un arreglo
console.log(Object.values(producto)); //imprime
// 0: plancha 
// 1: 1000 
// 2: true


// object entries imprime todo con nombres de propiedades y sus valores en un array
console.log(Object.entries(producto));