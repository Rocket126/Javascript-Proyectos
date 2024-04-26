// creando variables de un objeto

let productos = {
    nombre : "Pantalla de 50 pulgadas",
    fecha: "22/4/2022",
    precio: 300,
    otros:{
        medida: "1.50mt X 1mt",
        color: "negro",
        comprador: {
            nombre: "Enrique Gallardo",
            direccion:"san pedro de la paz",
            telefono: 123456
        }
    }
}

//para acceder a una propiedad se debe escribir el mismo nombre de la propiedad para hacer mach 
//y crear la variable, en este caso variables como nombre, precio, medida que estan dentro del objeto padre productos.
let { nombre, precio, otros:{ medida } } = productos;


console.log(nombre);
console.log(precio);
//console.log(otros);
console.log(medida);

//para acceder a un sub ojeto dentro de otro subojeto se debe usar 2 puntos y llaves siguiendo el arbol del objeto original.
let { otros:{ comprador }} = productos;//accedemos y creamos la variable/objeto "comprador" desde un objeto hijo llamado "otros"
console.log(comprador);


let { otros:{ comprador:{ telefono } }} = productos;//accedemos y creamos la variable telefono desde el objeto producto 
//desde el subojeto llamado "otros" desde el subjeto "comprador". 
console.log(`El numero telefonico ${telefono}`);


let algo = productos.otros.color;
console.log(`lo que esta en algo es ${algo}`);//imprime el color negro


// let comprador = productos.otros.comprador;//no funciona si nombro y declaro la variable como la propiedad.
//no se puede redeclarar. Solo es posible si a la variable le cambio por otro nombre.
let cdr = productos.otros.comprador;//la variable cdr es creada como objeto ya que almacena propiedades de otro objeto
console.log(cdr);//imprime el objeto cdr con las propiedades nombre, direccion, telefono

