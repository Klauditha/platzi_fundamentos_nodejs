function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Hola " + nombre);
            resolve(nombre);
        },1500);
    });
}

function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
                console.log("bla bla bla...");
                //resolve(nombre);
                reject("hay un error");
            },1000);
    });
}

function adios(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){console.assert(first, second)
            console.log("Adios "+ nombre);
            resolve();
        });
    });
}
console.log("Inicnado el proceso");
hola("Claudia")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log("Terminado el proceso");
    })
    .catch(error => {
        console.error("hay un error");
        console.error(error);
    });