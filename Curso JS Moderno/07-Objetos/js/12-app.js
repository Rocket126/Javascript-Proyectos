
// Objeto literal
const producto = {
    nombres : "Plancha",
    precio : 1000,
    disponible : true
}

// Objeto constructor / Object Constructor
function Producto(nombre, precio)
{
    this.nombre =  nombre;//this hace referencia a las variables que se encuentran del mismo objeto construcotr
    this.precio = precio;
    this.disponible = true;
}

//al decir y crear un nueva varible de tipo objeto "producto2", al decir new Producto() 
//decimos crea un objeto usando la plantilla del constructor objeto "function Producto()"
//que contiene las propiedades nombre, precio y disponible e insertales estos valores pasados por parametros
const producto2 = new Producto("Monitor 24 pulgadas", 500);
console.log(producto2);


const producto3 = new Producto("Radio", 2500);
console.log(producto3);