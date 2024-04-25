let numero1 = "20";
let numero2 = "20.2";
let numero3 = "Uno";
let numero4 = 20.2;


//Convirtiendo String a numeros 
//Para esto se utiliza el metodo parseInt()

console.log(Number.parseInt(numero1));//imprime 20 convertido a numero. 

console.log(typeof numero1);//me duevuelve el tipo en consola. imprime que es un string

console.log(numero1);//imprime el string 20

numero1 = Number.parseInt(numero1);//reasigno el valor parseado a entero

console.log(`el String ha sido parseado a numero`);
console.log(numero1); //imprime el numero a entero


console.log(Number.parseFloat(numero2));//Convierte el string a numero flotante

console.log(Number.parseInt(numero3));//NaN not a number (no es un numero)

//consultar si un numero es entero o no (20.2)
console.log(Number.isInteger(numero4));//si lo es devuelve true, de lo contrario false. Devolvio false 


console.log(Number.isInteger(numero3));//devuelve falso porque es un String ("Uno")