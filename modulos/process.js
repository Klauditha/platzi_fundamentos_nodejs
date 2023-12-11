//const process = require('process');

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso ha terminado');
    setTimeout(() => {
        console.log("Esto no se va a mostrar");
    }, 0);
  });

  process.on('uncaughtException', (err,origen) => {
    console.error("Se nos ha olvidado capturar un error");
    console.error(err);
  });


  process.on('unhandledRejection', () => {
      
  })

  funcionQueNoExiste();

  console.log("Esto si el error no se recoje, no sale");