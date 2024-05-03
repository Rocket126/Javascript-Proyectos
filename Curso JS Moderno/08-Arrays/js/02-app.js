let numeros = [10, 20, 30, 40, 50, [101, 102, 103]];

console.log(numeros);
console.table(numeros);//imprime una tabla del arreglo

//acceder al arreglo
console.log(numeros[2]);//imprime lo que hay en la posicion 2: que es un 30

console.log(numeros[0]);//imprime el valor 10 que esta en la posicion 1

//Si intento acceder a una posicion que no existe en el arreglo me marcara undefined
console.log(numeros[20])//imprime undefined

//para acceder aun subarrglo se indica ambas posiciones, primero la del array principal seguido del 
// la posicion del subarreglo
console.log(numeros[5][2]);
//la posicion determina como vas a acceder en el arreglo