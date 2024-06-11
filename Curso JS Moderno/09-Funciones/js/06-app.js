//pasando valores por defecto a una funcion

function saludar(nombre = "desconocdo", apellido =""){
    //si no le indico un valor por default me arroja undefined
    console.log(`hola ${nombre} ${apellido}`);
}

saludar("cristian"); //si no le indico un valor al parametro desde aqui, 
//me arrojara el valor por defecto indicado. 
