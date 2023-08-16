/*Clase sobre File system*/
const fs = require('fs');

function leer(ruta,cb){
    fs.readFile(ruta,(err,data) => {
        console.log(data.toString());
    });
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.log("No he podido escribir");
        }
        else{
            console.log("Se ha escrito correctamente");
        }
    });
}


function borrar(ruta,cb){
    fs.unlink(ruta,cb);
}

//escribir(__dirname+ '/archivo1.txt', "Soy un archivo nuevo", console.log);
//leer(__dirname+ '/archivo.txt');
borrar(__dirname+ '/archivo1.txt', console.log);