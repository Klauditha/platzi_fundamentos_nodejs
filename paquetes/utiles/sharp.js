const sharp = require('sharp');

sharp('./paquetes/utiles/imagen.jpg')
    .resize(800)
    .grayscale()
    .toFile('./paquetes/utiles/resized_imagen1.jpg')