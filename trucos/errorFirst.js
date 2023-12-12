function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e, null);
    }
  }, 1000);
}

//try{
asincrona(function (err, dato) {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);
    return false;

    // NO VA A FUNCIONAR
    // throw err;
  }
  console.log('Todo ha ido bien', dato);
});
/*}
catch(e){
    console.error('Tenemos un error');
    console.error(e);
}*/
