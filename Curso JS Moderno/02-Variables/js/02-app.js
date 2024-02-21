/* si declaramos un variable en otro archivo JS y luego volvemos a declarar esta misma variable en otro 
archivo, JS arrojara un error variables porque ya habia sido declarada en otro archivo. Error de scope*/ 
//como es el caso de la variable producto. Chequear en consola el error.
//let producto = "Tablet"; //si aparece un error como este, la pagina no cargara los demas elementos en consola.


let mueble = "Silla";
console.log(mueble); //imprime Silla

//al igual que cuando declaramos con var, con let se puede hacer lo mismo con la reasignacion de valores.
mueble = "Mesa";
console.log(mueble); //Imprime Mesa


mueble = 20; //tambien permite asignar valores numericos en variables ya inicializadas con otro tipo.
console.log(mueble); //imprime 20

mueble = true; 
console.log(mueble);

mueble = null; 
console.log(mueble);