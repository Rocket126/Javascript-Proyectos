//Funciones en objetos y acceder a sus valores.
//this referencia al mismo objeto en el que se encuentra. 
//osea referencia al objeto para acceder a los datos del mismo objeto. 

// si no se indica el this, las variables a llamar tomaran el valor de alguna variable externa del objeto 
//con el mismo nombre.
let nombres = "calabaza";
let precio = 1000;


const producto = {
    nombres : "monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    mostrarInfo: function()
    {
        //console.log(`El producto: ${nombres} tiene un valor de ${precio}`);
        console.log(`El producto: ${this.nombres} tiene un valor de ${this.precio}`);
        //this hace referncia al mismo objeto, es como usar "producto." para llegar acceder a una propiedad
    }
}

producto.mostrarInfo();//El producto: monitor tiene un valor de 300




//otro ejemplo usando this
const producto2 = {
    nombres : "Plancha",
    precio : 1000,
    disponible : true,
    mostrarInfo: function()
    {
        console.log(`El producto: ${nombres} tiene un valor de ${precio}`);//obtiene variables desde afuera del objeto

        console.log(`El producto: ${this.nombres} tiene un valor de ${this.precio}`);
        //this hace referncia al mismo objeto, es como usar "producto." para llegar acceder a una propiedad
    }
}

producto2.mostrarInfo();//El producto: plancha tiene un valor de 1000