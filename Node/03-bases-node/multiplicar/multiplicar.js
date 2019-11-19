const fs = require('fs');


let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`EL valor introducido ${ base } no es un numero`); //el reject ejecuta la funcion se dispara y sigue corriendo el codigo por eso ponemos un return xa q no continue
            return;

        }

        let data = '';

        for (i = 1; i <= 10; i++) {

            data += `${ base }*${ i } = ${ base * i }\n`;
        }



        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`);
            console.log(`El archivo de la tabla-${ base }.txt ha sido creado`);
        });

    });
}

module.exports = {
    crearArchivo
}