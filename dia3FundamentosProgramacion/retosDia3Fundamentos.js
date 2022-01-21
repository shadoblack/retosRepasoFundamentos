//reto1
//if/else

let semaforo = "verde";
let coches = false;

if(semaforo == "verde" && coches == false){
    console.log("El peaton Puede pasar");
}
else{
    console.log("El peaton no puede pasar");
}

//ternarios

let orden = semaforo == "verde" && coches == false ? "Puede pasar" : "No puede passar."
console.log(orden);

//reto2

let receta = "";

ingrediente = "amianto";
switch (ingrediente){

    case "cebolla":
        receta="sopa de cebolla";
    break;
    case "ajo":
        receta="sopa de ajo";
    break;
    case "aceite":
        receta="sopa de aceite";
    break;
    case "sal":
        receta="sopa de sal";
    break;
    case "amianto":
        receta="sopa de amianto";
    break;
    case "fresa":
        receta="sopa de fresa";
    break;
    case "calimocho":
        receta="sopa de calimocho";
    break;
    case "gusanos":
        receta="sopa de gusanos";
    break;
    case "ternera":
        receta="sopa de ternera";
    break;
    case "fideos":
        receta="sopa de fideos";
    break;
    default:
    console.log("imposible proponer receta");
    break;

}
console.log(receta);

//reto3
//if/else

let platos = 3;
let dj = true;
let horasBarraLibre = 2;
let coctelBienvenida = true;

if((platos == 3 && dj== true && horasBarraLibre ==2) 
|| (coctelBienvenida == true && platos == 2 && horasBarraLibre ==1) ){

    console.log("se cumplen los requisitos");


}
else{

    console.log("no se cumplen los requisitos");
}

//ternarios

conclusion = (platos == 3 && dj== true && horasBarraLibre ==2) 
|| (coctelBienvenida == true && platos == 2 && horasBarraLibre ==1)
 ? "se cumplen los requisitos": "no se cumplen los requisitos";
 console.log(conclusion);

 //reto4

 persona1 =
 {
     "nombre":"willfredo",
     "apellido":"belloso",
     "anyoNacimiento":1979,
     "aficiones":["estudiar","correr","leer","bailar","nadar"],
     "dni":{"anyoExpedicion":1990,"lugarNacimiento":"mordor"},
     "colorPelo":"negro"

 }
 persona2 =
 {
     "nombre":"will",
     "apellido":"Smith",
     "anyoNacimiento":1969,
     "aficiones":["estudiar","trabajar","leer","escribir","nadar"],
     "dni":{"anyoExpedicion":1984,"lugarNacimiento":"minas Tirith"},
     "colorPelo":"castaño"

 }
 persona3 =
 {
     "nombre":"Fred",
     "apellido":"Marth",
     "anyoNacimiento":1970,
     "aficiones":["viajar","trabajar","cavar","escribir","bucear"],
     "dni":{"anyoExpedicion":1996,"lugarNacimiento":"cancun"},
     "colorPelo":"castaño"

 }
 persona4 =
 {
     "nombre":"Julieta",
     "apellido":"Belicosa",
     "anyoNacimiento":1991,
     "aficiones":["baloncesto","trabajar","leer","escribir","correr"],
     "dni":{"anyoExpedicion":2020,"lugarNacimiento":"jerusalen"},
     "colorPelo":"rojo"

 }

let personas= [persona1,persona2,persona3,persona4];
console.log("/------------------------------SABER SI TIENEN EL PELO CASTAÑO------------------------------/");
 
if(personas[0].colorPelo == "castaño"){
    console.log(personas[0].nombre + " tiene el pelo castaño");
}
else{
    console.log(personas[0].nombre + " No tiene el pelo castaño.");
}

if(personas[1].colorPelo == "castaño"){
    console.log(personas[1].nombre + " tiene el pelo castaño");
}
else{
    console.log(personas[1].nombre + " No tiene el pelo castaño.");
}
if(personas[2].colorPelo == "castaño"){
    console.log(personas[2].nombre + " tiene el pelo castaño");
}
else{
    console.log(personas[2].nombre + " No tiene el pelo castaño.");
}
if(personas[3].colorPelo == "castaño"){
    console.log(personas[3].nombre + " tiene el pelo castaño");
}
else{
    console.log(personas[3].nombre + " No tiene el pelo castaño.");
}

//-------------------------------------------------------------------------------------//
console.log("/------------------------------SABER SI TIENEN MAS O IGUAL DE 30 AÑOS------------------------------/");

if(personas[0].anyoNacimiento <= 1990){
    console.log(personas[0].nombre + " tiene mas o igual de 30 años");
}
else{
    console.log(personas[0].nombre + " tiene menos de 30 años.");
}
 if(personas[1].anyoNacimiento <= 1990){
    console.log(personas[1].nombre + " tiene mas o igual de 30 años");
}
else{
    console.log(personas[1].nombre + " tiene menos de 30 años.");
}
 if(personas[2].anyoNacimiento <= 1990){
    console.log(personas[2].nombre + " tiene mas o igual de 30 años");
}
else{
    console.log(personas[2].nombre + " tiene menos de 30 años.");
}
 if(personas[3].anyoNacimiento <= 1990){
    console.log(personas[3].nombre + " tiene mas o igual de 30 años");
}
else{
    console.log(personas[3].nombre + " tiene menos de 30 años.");
}

//--------------------------------------------------------------------------------------//
console.log("/------------------------------LUGAR NACIMIENTO------------------------------/");


if((personas[0].colorPelo == "negro" && personas[0].dni.anyoExpedicion <= 2018) ||
(personas[0].anyoNacimiento >=2004 && (personas[0].aficiones.includes("comer" || "dormir"))) ){
    console.log(personas[0].nombre + " nacio en " + personas[0].dni.lugarNacimiento);
}
else{
console.log(personas[0].nombre + " No cumple requisitos.")
}
if((personas[1].colorPelo == "negro" && personas[1].anyoExpedicion <= 2018) ||
(personas[1].anyoNacimiento >=2004 && (personas[1].aficiones.includes("comer" || "dormir"))) ){
    console.log(personas[1].nombre + " nacio en " + personas[1].dni.lugarNacimiento);
}
else{
    console.log(personas[1].nombre + " No cumple requisitos.")
    }
if((personas[2].colorPelo == "negro" && personas[2].dni.anyoExpedicion <= 2018) ||
(personas[2].anyoNacimiento >=2004 && (personas[2].aficiones.includes("comer" || "dormir"))) ){
    console.log(personas[2].nombre + " nacio en " + personas[2].dni.lugarNacimiento);
}
else{
    console.log(personas[2].nombre + " No cumple requisitos.")
    }
if((personas[3].colorPelo == "negro" && personas[3].dni.anyoExpedicion <= 2018) ||
(personas[3].anyoNacimiento >=2004 && (personas[3].aficiones.includes("comer" || "dormir"))) ){
    console.log(personas[3].nombre + " nacio en " + personas[3].dni.lugarNacimiento);
}    
else{
    console.log(personas[3].nombre + " No cumple requisitos.")
    }  



//reto5

let personaje = {
    "nombre":"Joe",
    "apellidos":["Dardo","valiente"],
    "edad": 27,
    "colorPelo":"negro",
    "dinero": 15000,
    "coches":[ {"marca":"ford",
            "numAsientos": 4,
            "esElectrico":true},
            {"marca":"seat",
            "numAsientos": 4,
            "esElectrico":false}],
    "padres":[{"nombre":"Bill",
            "apellidos":["Dardo","Cohete"],
            "edad": 50,
            "colorPelo":"blanco",
            "dinero": 150000,
            "coches":[{"marca":"ford",
            "numAsientos": 4,
            "esElectrico":true},
            {"marca":"seat",
            "numAsientos": 4,
            "esElectrico":false}],
            "padres":[{"nombre":"John",
                    "apellidos":["Dardo","Tripanosoma"],
                    "edad": 80,
                    "colorPelo":"gris",
                    "dinero": 100000,
                    "coches":[{"marca":"ford",
                    "numAsientos": 4,
                    "esElectrico":true}],
                    },{"nombre":"Lily",
                    "apellidos":["Tripanosoma","Temeraria"],
                    "edad": 78,
                    "colorPelo":"azul",
                    "dinero": 10000,
                    "coches":[{"marca":"ford",
                    "numAsientos": 4,
                    "esElectrico":true},
                    {"marca":"seat",
                    "numAsientos": 4,
                    "esElectrico":false}],
                    }]
            },{"nombre":"Jill",
            "apellidos":["Valiente","Intrepida"],
            "edad": 48,
            "colorPelo":"verde",
            "dinero": 34000,
            "coches":[{"marca":"ford",
            "numAsientos": 4,
            "esElectrico":true},
            {"marca":"seat",
            "numAsientos": 4,
            "esElectrico":false}],
    "padres":[{"nombre":"Jamon",
                "apellidos":["Valiente","Jugoso"],
    "edad": 48,
    "colorPelo":"verde",
    "dinero": 34000,
    "coches":[{"marca":"ford",
    "numAsientos": 4,
    "esElectrico":true},
    {"marca":"seat",
    "numAsientos": 4,
    "esElectrico":false}]}, { "nombre":"Jamona",
    "apellidos":["Intrepida","Patanegra"],
    "edad": 48,
    "colorPelo":"fucsia",
    "dinero": 34000,
    "coches":[{"marca":"ford",
    "numAsientos": 4,
    "esElectrico":true},
    {"marca":"seat",
    "numAsientos": 4,
    "esElectrico":false}]
}]}]}

//------------------------------------------------------------------------------------------//
console.log("/------------------------------CAMBIOS DE PELAZOS------------------------------/");

if((personaje.padres[1].padres[1].colorPelo != "castaño") && (personaje.padres[0].padres[0].coches.length==1))   
{personaje.colorPelo = "verde";
console.log("El pelazo de " + personaje.nombre + " ha sido cambiado por " + personaje.colorPelo);}    

else if(personaje.colorPelo === "verde"){
    personaje.colorPelo = "azul";
    console.log("El pelazo de " + personaje.nombre + " ha sido cambiado por " + personaje.colorPelo);
}
else{
    console.log("no se cumplen condiciones.");
}
//-------------------------------------------------------------------------------------------//
console.log("/------------------------------SUMAS MONETARIAS------------------------------/");

if( ((personaje.padres[0].dinero)+(personaje.padres[1].dinero)+
(personaje.padres[0].padres[0].dinero)+(personaje.padres[1].padres[0].dinero))> 100000){
    personaje.coches.push({"marca":"ferrari","numAsientos": 2,"esElectrico":false})
console.log(personaje.coches);
}
else if((((personaje.padres[0].dinero)+(personaje.padres[1].dinero)+
(personaje.padres[0].padres[0].dinero)+(personaje.padres[1].padres[0].dinero)) <=100000) && 
(((personaje.padres[0].dinero)+(personaje.padres[1].dinero)+
(personaje.padres[0].padres[0].dinero)+(personaje.padres[1].padres[0].dinero))>= 35000)){
    personaje.coches.push({"marca":"testa","numAsientos":4,"esElectrico":true})
    console.log(personaje.coches);
}
else{
    personaje.coches.push({"marca":"Peugeot","numAsientos":4,"esElectrico":false})
    console.log(personaje.coches);
}
