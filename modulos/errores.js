function otraFuncion(){
    return seRompre();
}

function seRompre(){
    return 3+z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
            return 3+z;
        }
        catch(err){
            console.error("Error en la funcion asincrona SeRompeAsincrona");
            cb(err)
        }
        
    })
}
try{
    //seRompre();
    otraFuncion();
    seRompeAsincrona(function(err){
        console.log('hayerror: '+ err.message);
    });
}
catch(err){
    console.error("Vaya algo se ha roto");
    console.error(err.message);
    console.error(err.stack);
    console.log("Lo hemos capturado");
}

console.log("este es el final");
