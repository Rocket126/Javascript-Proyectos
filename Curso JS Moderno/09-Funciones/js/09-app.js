//creando funciones en objetos

let miObjeto = { reproducir: function(id){
    console.log("reproduciendo cancion...", id);
    },
    pausa: function(){
        console.log("pausando...");
    }
   ,
   borrar: function(){
    console.log("borrando la cancion");
    }, 

    crearPlaylist: function(nombre){
        console.log(`creando playlist "${nombre}"`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo playlist "${nombre}"`);
    }
}

//para acceder a las propiedades del objeto se utiliza el punto seguido de la propiedad
miObjeto.reproducir(30);
miObjeto.reproducir(15);
miObjeto.pausa();

//Creando una propiedad metodo afuera del objeto
//miObjeto.borrar = function(){
//    console.log("borrando la cancion");
//}

miObjeto.borrar();//llamando la propiedad borrar
miObjeto.crearPlaylist("Heavy metal");
miObjeto.crearPlaylist("Rock de los 90");
miObjeto.reproducirPlaylist("Rock de los 90");