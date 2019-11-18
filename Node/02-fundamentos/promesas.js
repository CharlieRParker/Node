//las promesas nos permiten ejecutar un trabajo y despues de que se resuelva la tarea realziar un trabajo
//en particular

let empleados = [{
    id: 1,
    nombre: 'Charlie'
}, {
    id: 2,
    nombre: 'Maria'
}, {
    id: 3,
    nombre: 'Jack'
}];

let salario = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}, ];

//promesa

let getEmpleado = (id) => {
    //retornamos un promesa
    return new Promise((resolve, reject) => {
        //cuando llamemos a la promesa ejecutara el code que tenemos aqui abajo
        //resolve se llama si la promesa es existosa(si empleado)
        //reject se va a llamar si no es exitosa (no empleado)
        let empleadoDB = empleados.find(empleado => empleado.id === id) //usamos .find para buscar empleado y creamos empleadoDB para almacenarlo

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB); //solo se peude regresar un argumento, mas de un dato habra que regresar objeto
        }
    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salario.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });

}


//utilizamos la promesa, llamamos a la funcion
//no hay callbacks, se especifica de la siguiente forma primero se pone el id q es el parametro especificado en la funcion
//luego el .then y la funcion de flecha (primero resolve = empleado)


//getEmpleado(1).then(empleado => {
//console.log('Empleado BD', empleado);
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es de ${resp.salario}€ `);

//     }, err => console.log(err));

// }, (err) => console.log(err));

//vamos a hacer la misma promesa pero en cadena

getEmpleado(1).then(empleado => {

        return getSalario(empleado); //este return el siguiente then corresponde a esta promesa

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}€`);

    }) //ahora manejamos el error con el catch
    .catch(err => {
        console.log(err);

    })