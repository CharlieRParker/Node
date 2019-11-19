//requireds



// let base = 7;
// let data = '';

// for (i = 1; i <= 10; i++) {

//     data += `${ base }*${ i } = ${ base * i }\n`;
// }



// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo de la tabla-${ base }.txt ha sido creado`);
// });

const { crearArchivo } = require('./multiplicar/multiplicar.js') //destructuracion {}

let base = '9';



crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(err => console.log(err));