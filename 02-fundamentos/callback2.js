//creamos una pequeña BD con empleados y alario


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

//funcion para obtener un empleado por el id
let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id) //usamos .find para buscar empleado y creamos empleadoDB para almacenarlo
        //se suele empezar con negacion
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (idEmpleado, callback) => {
    let salarioDB = salario.find(salario => salario.id === idEmpleado)
    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado con el ID ${idEmpleado}`)
    } else {
        callback(null, salarioDB);

    }

}


// llamamos a la funcion
getEmpleado(1, (err, empleado) => {
    console.log(empleado);

    if (err) {
        return console.log(err);
    }

});


getSalario(1, (err, salario) => {
    console.log(salario);

    if (err) {
        return console.log(err);
    }


});