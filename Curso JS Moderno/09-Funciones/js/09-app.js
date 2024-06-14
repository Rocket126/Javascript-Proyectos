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
    } 
}

miObjeto.reproducir(30);
miObjeto.reproducir(15);
miObjeto.pausa();

//creando una propiedad metodo afuera del objeto
//miObjeto.borrar = function(){
//    console.log("borrando la cancion");
//}

miObjeto.borrar();//llamando la propiedad borrar