//función normal

//function sumar(a, b) {
//    return a + b;
//}


//let sumar = (a, b) => {
//    return a + b;
//}

//esto es una funcion flecha
//let sumar = (a, b) => a + b;

// function saludar(nombre){
//    return `Hola ${ nombre }`;
//}

//esto es una funcion flecha con unsa sola linea
//let saludar = () => 'Hola Mundo';

//funcion normal
//function saludar(nombre) {
//    return `Hola ${ nombre }`;
//}

//funcion flecha de una linea
//let saludar = (nombre) => `Hola ${ nombre }`;




//console.log(saludar('Charlie'));

//console.log(sumar(10, 20));

//el objeto del this apunta a lo q vale this  fuera de la funcion de flecha, por eso lo ponemos asi getNombre() {
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre}  ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());