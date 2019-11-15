//funcion que recibe otra funcion que se ejecuta cuando se cumple la condicion del tiempo,

//setTimeout(function () {
//    console.log('Hola Mundo'); //esta funcion se conoce como callback
//}, 3000);



//aqui la convertimos en func flecha
//setTimeout(() => {
//  console.log('Hola Mundo'); //esta funcion se conoce como callback

//}, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
            nombre: 'Charlie',
            id
        }
        //ya tenemos la info recogida de la bd (supuestamente) asi que ahora llamamos/ejecutamos el callback
    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario); //aqui estamos llamando a la funcion y le retornamos el user de la bd
    } //añadimos un null como primer parametro para diferencias que esa peticion si es correcta, es decir 
    // especifica rque el priemr argumento (err) no existe
}

//ahora vamos a utilizar el callback, suponemos q qeremos el id 10 luego viene el callback q es una 
//funcion y  mandamos el usuario como parametro, 

//asi no sabemos cuando falla o cuando es correcto, el primer parametro del callback deberia ser el error (err)
//y debemos añadir null al callback en el momento que lo llamamos (mirar arriba)
getUsuarioById(3, (err, usuario) => {

    //aqui manejamos el parametro err

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);


});