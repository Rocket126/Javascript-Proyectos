let resultado;

//PI
resultado = Math.PI;

//Redondear con round(numero) Este redondea hacia abajo y hacia arriba si pasa del medio (x.5) hacia arriba o abajo
resultado = Math.round(2.8);//imprime 3 
console.log(resultado);

resultado = Math.round(2.2);
console.log(resultado);//imprime 2

resultado = Math.round(2.6);
console.log(resultado);// 3

resultado = Math.round(2.5);
console.log(resultado);// 3

resultado = Math.round(2.49);
console.log(resultado);// 2


//Redondear a la fuerza hacia arriba. 
//Aunque el numero sea 2.01 siempre redondeara hacia el entero siguiente arriba
//sera 3

resultado = Math.ceil(2.01);
console.log("Ceil, numero a redondear 2.01 = "+ resultado);//Imprime 3

resultado = Math.ceil(2.001);
console.log("numero a redondear 2.001 = "+ resultado);//Imprime 3


//Para redondear de manera forzosa hacia abajo
resultado = Math.floor(2.9);
console.log("numero a redondear 2.9 = "+ resultado);// 2


//Raiz Cuadrada
resultado = Math.sqrt(144);
console.log(resultado);// raiz cuadrada de 144 es: 12


//obtener el valor absoluto de un numero (negativo - positivo)
resultado = Math.abs(-500);
console.log(resultado);//imprime a secas 500

//metodo potencia 
resultado = Math.pow(8,3);//8 a la potencia de 3
console.log(resultado);// imprime 512

//Obtener el numero menor entre dos numeros o mas. Compara la seguidilla de numeros y obtiene el menor
resultado = Math.min(3,5,1,-3,12,100,0.4);
console.log("El numero menor es: " +resultado);// Imprime -3


//Obtener el numero mayor entre dos numeros o mas. Compara la seguidilla de numeros y obtiene el Mayor
resultado = Math.max(3,5,1,-3,12,100,0.4);
console.log(`el numero mayor es: ${resultado}`);// Imprime 100

//Obtener numeros random con Math.random(). Si lo multiplicas comienza a dar un rango de 1 a al numero multiplicado dado.
//Va obteniendo numeros desde 1 a 20
resultado = Math.random()*20;
console.log("numero aleatorio: " + resultado);

resultado = Math.round(Math.random()*20);
console.log("numero aleatorio redondeado con round: " + resultado);