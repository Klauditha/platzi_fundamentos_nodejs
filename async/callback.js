function hola(nombre,miCallback){
    console.log("Soy una funcion asincrona");
    setTimeout(function(){
        console.log("Hola " + nombre);
        miCallback(nombre);
    },1500);
}

function adios(nombre, otroCalback){
    setTimeout(function(){
        console.log("Adios "+ nombre);
        otroCalback();
    })
}
console.log("Iniciando proceso");

hola("Carlos",function(){})
adios("Carlos",function(){})

hola("Claudia",function(){
    adios("Claudia", function(){
        console.log("Terminando proceso");
    });
});
