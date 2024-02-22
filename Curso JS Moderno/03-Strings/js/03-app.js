let nuevoProducto = "Radio bluetooh ";

let precio = "30 USD ";

//el metodo concat es un metodo disponible solo para los strings

console.log(nuevoProducto.concat(precio));
console.log(nuevoProducto.concat("en descuento"));


//otra manera es usando el operador + para concatenar
console.log(nuevoProducto + precio + "sin descuento");

//otra manera de concatenar es usando template string (backtick) `` comillas invertidas y
//un signo dolar mas las llaves e introduciendo la variable.
console.log(`La ${nuevoProducto} con un valor de ${precio}`);