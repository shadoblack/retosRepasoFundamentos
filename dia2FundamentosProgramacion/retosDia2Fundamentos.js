//reto1
let cadena = "crisantemo";
let numero = 8;
let booleando = true;
array1 = [cadena,numero,booleando];

console.log(array1);

//reto2
let mapeo = new Map()

mapeo.set("numero",1)
mapeo.set(1,1)
mapeo.set("string","Mi string")
mapeo.set(2,"Mi string")
mapeo.set("boolean",true)
mapeo.set(3,true)
mapeo.set("array",[1,2,3,4])
mapeo.set(4,["Juan","Pepe","Ana","Maria"])

//reto3

//3.1
console.log("1.1, contenido del map ");
console.log(mapeo);

//3.2
console.log("1.2, tamaño del map ");
console.log(mapeo.size);

//3.3
console.log("1.3,mostrar clave 3 ");
console.log(mapeo.get(3));

//3.4
mapeo.delete("string");
console.log("1.4,borrar string y mostrar map.")
console.log(mapeo);

//reto4
let seteo = new Set()
seteo.add(1)
seteo.add("1")
seteo.add("Saludo")
seteo.add([1,2,3,4])
seteo.add(1)

//4.1
console.log("4.1,contenido del set");
console.log(seteo);

//4.2
console.log("4.2,tamaño del set");
console.log(seteo.size);

//4.3
console.log("4.3,mostrar si existe el valor 2");
console.log(seteo.has(2));

//4.4
console.log("4.4,eliminar del conjunto el elemento 1");
seteo.delete("1");
console.log(seteo);

//reto5

//5.1
let array2 = ["empireo","bizarro","emulsionante","sincoricarpio","fecaloma"]
let array3 = ["f","g","h","i","j"]
let array4 = ["k","l","m","n","ñaminu"]

//5.2
let matriz = [array2,array3,array4]

//5.3
console.log("5.3,mostrar matriz [2]");
console.log(matriz[2]);

//5.4
console.log("5.4,mostrar matriz [2,4]");
console.log(matriz[2][4]);

//5.5
console.log("5.5,mostrar segundo carácter de elemento matriz[2,4]");
console.log(matriz[2][4][1]);

//5.6
matriz[2].splice(0,array4.length,1,2,3,4,5);

//5.7
console.log("5.7,mostrar elemento 5.6");
console.log(matriz[2]);

//5.8
matriz[1].splice(3,1,true);

//5.9
console.log("mostrar elemento 5.8");
console.log(matriz[1][3]);

//5.10
array2.push("amalgama");

//5.11
array2.shift();

//5.12
array2.pop();

//5.13
array2.sort();

//reto6

//6.1
let persona = {
    "Nombre": "Pepe",
    "edad": 35,
    "esVaron": true,
    "aficiones": ["nadar","patinar","leer"],
    "DNI": {"numero": 44556677,
            "fechaDeExpedicion": "20 de Marzo de 2010"}}


//6.2
console.log("6.2,mostrar nombre 6.1.");
console.log(persona.Nombre);

//6.3
console.log("6.3,mostrar aficiones");
console.log(persona.aficiones);

//6.4
console.log("6.4,mostrar solo segunda aficion");
console.log(persona.aficiones[1]);

//6.5
console.log("6.5 mostrar todos los datos de su dni");
console.log(persona.DNI);

//6.6
console.log("6.6,mostrar solo fecha expedicion DNI");
console.log(persona.DNI.fechaDeExpedicion);

//6.7
persona.DNI.fechaDeExpedicion = ("21 de febrero de 2020");

//6.8
persona.aficiones.splice(1,1);

//6.9
persona.aficiones.push("escribir");
console.log(persona.aficiones);

//reto7



let persona2 = {
    "nombre":"WillfredoJr",
    "apellidos": ["el","la"],
    "edad": 21,
    "padres": [ persona3, {"nombre":"Willfredo",
                        "apellidos": ["el","Belloso"],
                        "edad": 54,
                        "padres": [persona5,  {
                            "nombre":"Willfredopapi",
                            "apellidos": ["el","Belloso"],
                            "edad": 84},
                            persona6, { 
                                
                                    "nombre":"Willfredomami",
                                    "apellidos": ["la","Bellosa"],
                                    "edad": 78}]
                                    ,persona4: {
                            "nombre":"Willfreda",
                            "apellidos": ["la","Bellosa"],
                            "edad": 50,
                            "padres": [persona5,  {
                                "nombre":"Willfredopapi",
                                "apellidos": ["el","Belloso"],
                                "edad": 84},
                                persona6 ,{ 
                                    
                                        "nombre":"Willfredomami",
                                        "apellidos": ["la","Bellosa"],
                                        "edad": 78}]
}}



//mostrar abuelo
console.log(persona2.padres[1].padres[0].nombre);

//segundo apellido abuela parte de padre
console.log(persona2.padres[0].padres[1].apellidos[1]);

//suma edad madre y abuelo por parte de padre
let edadTotal = persona2.padres[1].edad + persona2.padres[0].padres[0].edad;
console.log(edadTotal);

//intercambio de edades
console.log("Edades antes del cambio abuelo " + persona2.padres[0].padres[0].edad );
console.log("Edades antes del cambio abuela " + persona2.padres[0].padres[1].edad );
[persona2.padres[0].padres[0].edad , persona2.padres[0].padres[1].edad] 
=[persona2.padres[0].padres[1].edad,persona2.padres[0].padres[0].edad];
console.log("edades despues del cambio abuelo " + persona2.padres[0].padres[0].edad);
console.log("edades despues del cambio abuela " + persona2.padres[0].padres[1].edad);

//añadir a la abuela por parte de madre segundo apellido por parte de padre
persona2.padres[1].padres[1].apellidos.push(persona2.padres[0].padres[0].apellidos[1]);
console.log(persona2.padres[1].padres[1].apellidos);

//eliminar el primer apellido de la madre
persona2.padres[1].apellidos.shift();
console.log(persona2.padres[1].apellidos);

//mostrar la ultima letra

let longitud2Apellido = persona2.padres[0].padres[0].apellidos[1].length -1;
console.log(persona2.padres[0].padres[0].apellidos[1].slice(longitud2Apellido));


//------------------------------------------------------------------------------------------------//


//reto opcional.

console.log(persona2.padres[1].padres[1].apellidos.includes("Martínez"));

