iniciarApp();

function iniciarApp()
{
    console.log("iniciando app...");
    
    segundaFuncion();//llamando a otra funcion desde otra.
}

function segundaFuncion()
{
    console.log("Desde la segunda funcion");
    usuarioAutenticado("pablo");
}

function usuarioAutenticado(usuario)
{
    console.log("usuario autenticado... espere...");
    console.log(`Usuario autenticado exitosamente ${usuario}`);

}//ejemplo sencillo burdo donde podriamos tomar el nombre de un usuario que ya ha sido autenticado
//y que luego tomaremos su numbre pasado por parametro a una funcion, previamente validado anteriormente 
//para mostrarlo su nombre en la pagina


