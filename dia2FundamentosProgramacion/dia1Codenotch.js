//reto1

let cadena = String("Hola que ase.");
let numero = Number( 1369 );
let booleana = Boolean (false);

console.log(cadena,numero,booleana);

//reto2


console.log("la raiz cuadrada de " + numero + " es " +Math.sqrt(numero));

//reto3


let min = 0;
let max = 10;


function reto3(min,max){

    return Math.floor(Math.random() * (max - min)) + min;
    
}

console.log(reto3(min,max));

//reto4

let nombre = "Edgar";
let apellido1 = "Rodríguez";
let apellido2 = "Blázquez";
let frase1 = "Me llamo " + nombre + ", y mis apellidos son " + apellido1 + " " + apellido2 + ".";
let frase2 = `Me llamo ${nombre}, y mis apellidos son ${apellido1} ${apellido2}.`;

console.log (frase1.toUpperCase());
console.log (frase2.toUpperCase());


//reto5

let fraseReto5 = "la inclopelusia se reduplimía adyecta a cada parangón del cuadrante."
let longitudFraseReto5 = fraseReto5.length;
console.log (longitudFraseReto5);
console.log (fraseReto5[3]);
console.log (fraseReto5.includes("codenotch"));