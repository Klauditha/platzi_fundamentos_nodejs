//Para acceder a modulos
//require()

console.log(global);
console.log(setInterval);

let i =0;
let intervalo = setInterval(function (){
    console.log("Hola");
    if(i === 3){
        clearInterval(intervalo);
    }
    i++;
},1000);


setImmediate(function(){
    console.log("Hola inmediato");
});


console.log(process);
console.log(__dirname);
console.log(__filename);

/* No se recomienda crear variable globales */

global.miVariable = "El valor";
console.log(miVariable);