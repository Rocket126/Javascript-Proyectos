
function sumar(a, b)//funcion retorna un valor
{
    return a+b;
}

 let v = sumar(3,3);//al retornar un valor de una funcion
//se debe asignar este valor a una variable
console.log(v);



let monto = 0;
function agregarCarrito(carrito)
{
    return monto += carrito;
}

function agregarImpuesto(m){
    return m*1.15;
}

 monto = agregarCarrito(100);
console.log(monto);

monto = agregarCarrito(150);
console.log(monto);

console.log(`total impuesto ${agregarImpuesto(monto)}`);

