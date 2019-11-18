/**
 * Async Await
 */
//poniendo la palabra async tenemos lo mismo que en la promesa comentada debajo

// let getNombre = async() => {

//     return 'Charlie'; //lo que regres aqui la funcion es = que un resolve

// };

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Marita');

        }, 3000);

    });
}

//await debe estar dentro de una funcion async, los async pueden estar solos

let saludo = async() => {

    let nombre = await getNombre();
    // no se va a ejecutar ese funcion hasta tener la respuesta del await get nombre
    return `Hola ${ nombre }`;
}

saludo().then(mensaje => {
        console.log(mensaje);
    })
    // .catch(err => {
    //     console.log('error de Async', err);
    // })