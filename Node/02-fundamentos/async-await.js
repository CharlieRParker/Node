/**
 * Async Await
 */
//poniendo la palabra async tenemos lo mismo que en la promesa comentada debajo

let getNombre = async() => {


    return 'Charlie'; //lo que regres aqui la funcion es = que un resolve

};

// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Fernando');
//     });
// }

getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(err => {
        console.log('error de Async', err);
    })