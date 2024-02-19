const nombre = prompt('Cual es tu nombre');//el prompt almacena lo ingresado en la variable nombre

//`${}` esto sellama template string ya que lleva comillas simples invertidas. Para manipular variables 

//document.querySelector() Permite seleccionar elementos del documento html
document.querySelector('.contenido').innerHTML =`${nombre} está aprendiendo Javascript`;
// a la clase .contenido reemplaza su "contenido" en el html con el texto que esta en el template string más su varible



//alert("Hola mundo");