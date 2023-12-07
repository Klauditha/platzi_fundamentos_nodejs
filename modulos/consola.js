console.log("Algo");
console.info("Algo");
console.error("Algo");
console.warn("Algo");

var tabla = [
    {
        a:1,b:'Z'
    },
    {
        a:2,b:'oTRA'
    }
]
console.table(tabla)

console.group('Conversacion');
console.log("bla bla bla");
console.log("bla bla bla");
console.log("bla bla bla");
console.log("bla bla bla");
console.groupEnd('Conversacion');
console.log("bla bla bla");

function function1(){
    console.group('funcion 1');
    console.log("Esto es una funcin 1");
    console.log("Esto es una funcin 1");
    function2();
    console.log("Hemos vuelto a la 1");
    console.groupEnd('funcion 1');
}

function function2(){
    console.group('funcion 2');   
    console.log("Esto es una funcin 2");
    console.log("Esto es una funcin 2");
    console.groupEnd('funcion 2');   
}

console.log("Empezamos");
function1();


console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');