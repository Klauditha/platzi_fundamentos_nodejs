const {exec, spawn} = require('child_process');
//const exec = require('child_process').exec;

//enlinux
//exec('ls -la', (err,stdout,stderr) =>{

//en windows
//exec('dir', (err,stdout,stderr) =>{

/*
exec('node modulos/consola.js', (err,stdout,stderr) =>{
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);
});
*/


//let proceso = spawn('ls', ['-la']);
let proceso = spawn('dir');
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('esta muerto');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function(){
    console.log('El proceso termino');
    console.log(proceso.killed);
})