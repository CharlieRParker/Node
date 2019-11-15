let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre}  ${this.apellido} - poder: ${this.poder}`
    }
};
// vamos a poner estas tres declaraciones en una sola usando la destructuracion
//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

//destructuracion, cambiamos el identificador de nombre por si choca con otras variables o propiedades
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);