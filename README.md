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