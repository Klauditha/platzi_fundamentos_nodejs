# Platzi Fundamentos NodeJs

Link: https://platzi.com/cursos/fundamentos-node/

Es un entorno de ejecucióm de javascript creado en 2009 y esta orientado a servidores.

NodeJs es una de las formas más rapidas y escalares para correr código desde el servidor

## Caracteristicas

- Monohilo con entradas y salidas asincronas. Un proceso por cada nucleo del procesador.
- Motor V8:
  - Entorno de ejecución de Js, creado por Google y liberado en el 2008.
  - Escrito en C++.
  - Convierte el Javascript en código de maquina en lugar de interpretarlo
- Centrado en modulos
- Orientado a eventos: Existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, podemos programar con la logica "Cuando sucede algo, se ejecuta esa parte del codigo y a su vez dispara otra parte".

## EventLoop

- Asincrona por diseño. Es bucle que se gestiona de forma asincrona y automatica de todos los eventos de tu aplicación. No va a bloquearse. Altamente concurrente.
- Evente Queue: Contiene todos los eventos que se generan por nuestro código (funciones, peticiones, etc). Estos eventos quedan en una cola que van pasando uno a uno al EventLoop.
- Thread Pool: Se encarga de gestionar los eventos de forma asincrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pqasa a Event Queue o no.

## Herramientas para ser mas felices: Nodemon y PM2

- https://nodemon.io/   npx nodemon archivo.js
- https://pm2.keymetrics.io/

## Global

En Node tenemos el objeto *global* que contiene los metodos y propiedades basicas que usamos en Node (Ej: setTimeOut).

*global* es el equivalente de *this* en el navegador

En node this es un alias de global
  this === global // true

Algunos metodos que se incluten en el global son:

- *setTimeOut* : se encarga de llamar a otra funcion despues de un periodo de tiempo.
- *setInterval* : llama a otra función cada intervalo de tiempo.
- *setImmediate* : Equivalente a setTimeOut pero son tiempo 0.
- *clearTimeOut* : detiene un setTimeOut.
- *claerInterval* : detiene un setInterval.

## Console

Podemos imprimir todo tipo de valores por nuestra terminal

- *console.log*:  Recibe cualquier tipo y lo muestra en la consola.
- *console.info*: Es equivalente a log pero es usado para informar.
- *console.error*: Es equivalente a log pero es usado para errores.
- *console.warn* : es equivalente a log pero es usado para warning.
- *console.table*: muestra una tabla a partir de un objeto.
- *console.count*: inicia un contador autoincremental.
- *console.countReset*: reinicia el contador a 0.
- *console.time*: inicia un cronometro en ms.
- *console.timeEnd*: Finaliza el cronometro.
- *console.group*: permite agrupar errores mediante identación.
- *console.groupEnd*: finaliza la agrupación.
- *console.clear*: Limpia la consola.