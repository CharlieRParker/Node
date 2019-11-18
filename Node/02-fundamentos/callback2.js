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
    //regresar esto 
    //{
    //   nombre: 'María',
    //   salario: 3000
    //}

let getSalario = (empleado, callback) => {
    let salarioDB = salario.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }); // en los callback se peude mandar cualqier cosa, tenemos que regresar 
        // el objeto de arrriba(nobre y salario) cuando se llame una respuesta 
    } //mejor usar un objeto literal como este

}


// llamamos a la funcion, funciones anidadas
getEmpleado(3, (err, empleado) => {


    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err); //si no da error es q tengo un empleado y un salario
        };

        console.log(`El salario de ${resp.nombre}, es de ${resp.salario}€`);

        //si tuvieramos que hacer otro callback otra consulta del salario iria aqui y asi scesivamente
        //se hace un lio asi que aprenderemos otra forma
    })

    //console.log(empleado); comentamos este console log para probar la funcion de getSalario ya que usamos 
    //este empleado

});