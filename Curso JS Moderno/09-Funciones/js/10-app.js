//Repasando arrows funtion

//funcion normal 
let miFuncion = function()
{
    console.log("aprendiendo JS");
}

//Funcion tipo arrow function
let miFuncion2 = () =>
    {
        console.log("aprendiendo arrow function en js");
    }

miFuncion();
miFuncion2();

// las arrows function si poseen una sola linea de codigo, no es necesario usar llaves.arrows.
/* la idea es simplificar el codigo reduciendolo */
let miFuncion3 = () => console.log("aprendiendo arrow function en js 3");

miFuncion3();