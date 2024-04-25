let autenticado = true;

// if (autenticado === true)
// {
//     console.log("si puedes ver netflix");
// }
// else{
//     console.log("no puedes");
// }

//OPERADOR TERNARIO: es parecido al if ya que se ahorra codigo en una linea y consta de 3 partes.
//la primera es la condicion a comparar (?), si se cumple pasa a la 2 parte "si esta autenticado", si no se cumple pasa a la 3ra parte 
//no esta autenticado.
console.log(autenticado ? "si esta autenticado" : "no esta autenticado");

let n1=10, n2=20;

let valor = n1 > n2 ? `n1: ${n1} es mayor` : `n2: ${n2} es mayor`;

console.log(valor);