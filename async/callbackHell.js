function hola(nombre,miCallback){
    console.log("Soy una funcion asincrona");
    setTimeout(function(){
        console.log("Hola " + nombre);
        miCallback(nombre);
    },1500);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("bla bla bla...");
        callbackHablar();
    },1000);
}

function adios(nombre, otroCalback){
    setTimeout(function(){
        console.log("Adios "+ nombre);
        otroCalback();
    })
}

function conversacion(nombre,veces,callback){
    if(veces>=0){
        hablar(function(){
        conversacion(nombre,--veces,callback);
      });
    }
    else{
        adios(nombre,callback);
    }
}

console.log("Iniciando proceso");


hola("claudia",function(nombre){
    conversacion(nombre,3,function(){
        console.log("Proceso terminado");
    });    
});

/*
hola("Claudia",function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log("Terminando proceso");
                });
            });
        });
    });
});
*/
