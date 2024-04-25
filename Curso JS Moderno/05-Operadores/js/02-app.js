let nu1 = 20;
let nu2 = "20";
let nu3 = 30;

//El operador igualdad tiene 2 maneras comparacion 
//la primera es un doble signo igual (==) este se usa para comparar dos variables donde 
//no se este evaluando su tipo si no su valor, en otras palabras no compara si son string o numero.
//solo su valor. (20 == "20") retorna verdadero


//en cambio con el operador igualdad de 3 signos (===) compara tanto el valor como el tipo de las variables.
// (20 === "20") devuelve falso ya que no son iguales en su tipo ni valor, no se cumple.

console.log(nu1 === nu3)//retorna falso ya que no son iguales (20 === 30)

//Compara tipo numerico con tipo string: 20 === "20"
console.log(nu1 === nu2);//retorna falso ya que un valor es numerico y el otro String


//comparacion usando doble igual
console.log(nu1 == nu2)//retorna verdadero ya que compara el valor, no su tipo


//en resumen == compara solo el valor
//en resumen === compara el tipo de dato y el valor 


//typeof devuelve solo el tipo de dato.
console.log(typeof nu1);//retorna number
console.log(typeof nu2);//retorna string

console.log("la comparacion de n1 y n2 mas una conversion con parseo")
console.log(nu1 === parseInt(nu2));//retorna true


//operador distinto != para comparar
let pass1 =" admin";
let pass2 =" Admin";
console.log(pass1 != pass2);//retorna true ya que son distintos


let num1 = 10;
let num2 = 10;
console.log(num1 != num2);//retorna falso ya que no son diferentes.


//compara un string de uno numerico 20 !== "20"
console.log(nu1 != nu2);//retorna falso ya que son iguales en valor, pero no en tipo.

//si se quiere comparar en tipo y valor se usa !== con doble igual
console.log(nu1 !== nu2);//retorna verdadero ya que esta vez si son diferentes en tipo y valor.