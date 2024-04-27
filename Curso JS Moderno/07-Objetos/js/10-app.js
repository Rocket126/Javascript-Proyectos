//unir datos como por ejemplo el id de un usuario

const producto = {
    nombres : "monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto);
console.log(medidas);

//usando metodo assign para unir objetos en uno. Se menciona ambos objetos separados por coma
//y se guarda la union en resultado que es de tipo objeto.
let resultado = Object.assign(producto, medidas);

console.log(producto);


//usando el Spread Operator o Rest Operator
//toma los datos de un objeto y lo suma con el otro.
let resultado2 = {...producto, ...medidas};//con estas llaves y los puntos digo que se unan estos datos.

console.log(producto);//une y se imprime de la misma manera que con el metodo assign()