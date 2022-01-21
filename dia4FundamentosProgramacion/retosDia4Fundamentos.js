let tituloReto = "|---------------------------------------|";
console.log(tituloReto + " RETO 1 " + tituloReto);
//-----------------------------------------------------------//
//reto1
//-----------------------------------------------------------//
for(i=1;i<11;i++){
console.log(i);
}
//------------------------------------------------------------//
i=0;
while(i<11){
    console.log(i);
    i++;
}
//-----------------------------------------------------------//
console.log(tituloReto + " RETO 1.1 " + tituloReto);

let pares =[];
for(i=0;i<11;i++){
if(i%2 == 0){
    pares.push(i);
}
}
console.log("numeros pares: " + pares);
//-----------------------------------------------------------//

while(i<11)
if(i%2 == 0){
    pares.push(i);
    i++;
}
console.log("numeros pares: " + pares);


//-----------------------------------------------------------//
console.log(tituloReto + " RETO 1.2 " + tituloReto);
let impares =[];
for(i=0;i<100;i++){
if((i%3 == 0)&&(i%2 != 0)){
    impares.push(i);
}
}
console.log("numeros impares: " + impares);
//-----------------------------------------------------------//
while(i<100){
         if((i%3 == 0)&&(i%2 != 0)){
            impares.push(i);
        }
        

}
console.log("numeros impares: " + impares);

//-----------------------------------------------------------//
//reto2
//-----------------------------------------------------------//
console.log(tituloReto + " RETO 2 " + tituloReto);

let persona1 =
 {
     "nombre":"willfredo",
     "apellido":"belloso",
     "anyoNacimiento":1979,
     "aficiones":["estudiar","correr","leer","bailar","nadar"],
     "dni":{"anyoExpedicion":1990,"lugarNacimiento":"mordor"},
     "colorPelo":"negro"

 }
 let persona2 =
 {
     "nombre":"will",
     "apellido":"Smith",
     "anyoNacimiento":1969,
     "aficiones":["estudiar","trabajar","leer","escribir","nadar"],
     "dni":{"anyoExpedicion":1984,"lugarNacimiento":"minas Tirith"},
     "colorPelo":"castaño"

 }
 let persona3 =
 {
     "nombre":"Fred",
     "apellido":"Marth",
     "anyoNacimiento":1970,
     "aficiones":["viajar","trabajar","cavar","escribir","bucear"],
     "dni":{"anyoExpedicion":1996,"lugarNacimiento":"cancun"},
     "colorPelo":"castaño"

 }
 let persona4 =
 {
     "nombre":"Julieta",
     "apellido":"Belicosa",
     "anyoNacimiento":1991,
     "aficiones":["baloncesto","trabajar","leer","escribir","correr"],
     "dni":{"anyoExpedicion":2020,"lugarNacimiento":"jerusalen"},
     "colorPelo":"rojo"

 }

let personas= [persona1,persona2,persona3,persona4];

for(let propiedades in persona3){
    console.log(propiedades);
    console.log(persona3[propiedades]);
}
//-----------------------------------------------------------//
console.log(tituloReto + " RETO 2.1 " + tituloReto);

for(let propiedades of personas){
    console.log(propiedades);
}
console.log(tituloReto + " RETO 2.1.1 " + tituloReto);

for(i=0;i<personas.length;i++){
    console.log(personas[i]);
}
console.log(tituloReto + " RETO 2.1.1.1 " + tituloReto);

 i= -1;
while( i < personas.length ){
    console.log(personas[i]);
    i++;
}
//-----------------------------------------------------------//
//reto3
console.log(tituloReto + " RETO 3 " + tituloReto);

for(let propiedades of personas){
    i++
    if((propiedades["anyoNacimiento"]<=2000) && (propiedades["anyoNacimiento"] >=1978)){
        personas[i];
        console.log( propiedades["nombre"] + " tu edad esta entre 40 y 20 años");
    }
    else{
        personas[i];
        console.log(propiedades["nombre"]+ " tu edad es menor que 20");
    }


}
//--------------------------------------------------------------//
console.log(tituloReto + " RETO 3.1 " + tituloReto);

for(let i=0;i<personas.length;i++){
    personas[i].aficiones.push("jugar a la play");
    console.log(personas[i]); 
}
//--------------------------------------------------------------//

for(let propiedades of personas){
    ["aficiones"].push("jugar a la play");
    console.log(propiedades);
}
//--------------------------------------------------------------//
//reto4
//--------------------------------------------------------------//
console.log(tituloReto + " RETO 4 " + tituloReto);

let numero = 5;
let factorial =1;
for (i=1; i<=numero; i++) {
    factorial = factorial * i;
     
}
console.log(factorial);
//--------------------------------------------------------------//

while( i < numero){
factorial = factorial * i
i++
}
console.log(factorial);
//---------------------------------------------------------------//
console.log(tituloReto + " RETO 4.1 " + tituloReto);

let arrayNum = [2432,6567,852,3,423,345,786,7,342,34,234,6,7574,34,23222,111,54,587];
let multiplo=[];
let noMultiplo=[];
i=-1;
while(i<arrayNum.length){
    
    if(arrayNum[i] %2 == 0){
    noMultiplo.push(arrayNum[i])
    }

    else{
    multiplo.push(arrayNum[i])
    }
    i++;
}
console.log ("los numeros " + noMultiplo + " no son primos de 2.");
console.log ("los numeros " + multiplo + " son primos de 2.")

//---------------------------------------------------------------//
console.log(tituloReto + " RETO 4.2 " + tituloReto);

let arrayNumGenerado =[]
    for(let i= 0;i<200;i++){
arrayNumGenerado.push(i);
}
let sumando = 0;
for(let i=0;i<101;i++){
sumando = sumando += arrayNumGenerado[i];
}
console.log("La maravillosa suma de los 100 primeros numeros es " + sumando);

//---------------------------------------------------------------------------//

console.log(tituloReto + " RETO 4.3 " + tituloReto);

let arrayDeNombres =["willfredo","godofrendo","pepe","mateo","dovahkiin","baalgruf"];

for(let i=0;i<arrayDeNombres.length;i++){
    if(arrayDeNombres[i] === "pepe"){
        console.log("pepe esta en la posicion " + (i+=1));
    }
    else{

    }

}
//------------------------------------------------------------------//
console.log(tituloReto + " RETO 4.4 " + tituloReto);

let arrayRandom1 = [];
let arrayRandom2 = [];

for(let i=-1;i<101;i++){
    arrayRandom1.push(Math.floor(Math.random()*(20 - 1) +1));
    arrayRandom2.push(Math.floor(Math.random()*(20 - 1) +1));
}
console.log(arrayRandom1);
console.log(arrayRandom2);
//--------------------------------------------------------------------//
console.log(tituloReto + " RETO 4.5 " + tituloReto);

let sumaArrays1=0;
let sumaArrays2=0;
for(let i=0;i<arrayRandom1.length; i++ ){
sumaArrays1 += arrayRandom1[i];

}
for(let i=0;i<arrayRandom2.length; i++ ){
    sumaArrays2 += arrayRandom2[i];
    
    }

console.log("La suma de los dos arrays es " + (sumaArrays1 += sumaArrays2));

//-------------------------------------------------------------------//
//reto5
console.log(tituloReto + " RETO 5 " + tituloReto);

console.log(tituloReto + " SABER SI TIENEN EL PELO CASTAÑO " + tituloReto);

for(let i=0;i<personas.length;i++){
    if(personas[i].colorPelo == "castaño"){
        console.log(personas[i].nombre + " tiene el pelo castaño");
    }
    else{
        console.log(personas[i].nombre + " No tiene el pelo castaño.");
    }
}
//-------------------------------------------------------------------//

console.log(tituloReto + " SABER SI TIENEN MAS O IGUAL DE 30 AÑOS " + tituloReto);

for(let i=0;i<personas.length;i++){
    if(personas[i].anyoNacimiento <= 1990){
        console.log(personas[i].nombre + " tiene mas o igual de 30 años");
    }
    else{
        console.log(personas[i].nombre + " tiene menos de 30 años.");
    }
}
//-------------------------------------------------------------------//

console.log(tituloReto + " LUGAR DE NACIMIENTO " + tituloReto);

for(let i=0;i<personas.length;i++){
    if((personas[i].colorPelo == "negro" && personas[i].dni.anyoExpedicion <= 2018) ||
(personas[i].anyoNacimiento >=2004 && (personas[i].aficiones.includes("comer") || 
personas[i].aficiones.includes("dormir"))) ){
    console.log(personas[i].nombre + " nacio en " + personas[i].dni.lugarNacimiento);
}
else{
console.log(personas[i].nombre + " No cumple requisitos.")
}
}
