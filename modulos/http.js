const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Nueva peticion');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      let saludo = hola();
      //res.write('Hola, que tal');
      res.write(saludo);
      res.end();
      break;
    default:
      res.write('Error 404: no se lo que quieres');
      res.end();
  }
  /*
  // Escribir cabeceras
  res.writeHead(201, { 'Content-Type': 'text/plain' });

  // Escribir la respuesta a usuario
  res.write('Hpla ya se usar HTTP en node js');
  res.end();*/
}

function hola() {
  return 'Hola, que tal';
}
console.log('Escuchando el puerto 3000');
