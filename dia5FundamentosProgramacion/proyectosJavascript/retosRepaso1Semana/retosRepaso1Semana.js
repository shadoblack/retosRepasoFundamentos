let linea = "|----------------------------|";
//--------------------------------------------------------------------------//
//reto de variables y tipos de datos.
console.log(linea + "1.Reto de variables y tipos de datos" + linea);
//1
let num1 =10;
let num2 =5;
//--------------------------------------------------------------------------//
//2
console.log(linea + "2.Reto de variables y tipos de datos" + linea);
let prodRes= num1*num2;
console.log("el resultado de multiplicar " + num1 + " por " + num2 +" es " + prodRes);
//--------------------------------------------------------------------------//
//3
console.log(linea + "3.Reto de variables y tipos de datos" + linea);
let frase1="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibusnuncquam, nec dictum erat feugiat vitae."
//--------------------------------------------------------------------------//
//4
console.log(linea + "4.Reto de variables y tipos de datos" + linea);
console.log("la cantidad de carácteres de la frase es: " + frase1.length);
//--------------------------------------------------------------------------//
//5
console.log(linea + "5.Reto de variables y tipos de datos" + linea);
console.log(frase1.replaceAll(" ",""));
//--------------------------------------------------------------------------//
//6
console.log(linea + "6.Reto de variables y tipos de datos" + linea);

let fraseEsBol=frase1.includes("amet");
console.log("frase1 incluye amet? " + fraseEsBol);
let prodEsBol= prodRes>30;
console.log("el producto es mayor que 30 " + prodEsBol);
//--------------------------------------------------------------------------//
//Reto de condicionales
console.log(linea + "Reto de condicionales" + linea);


let producto1 =
{ "nombre":"cerilla",
  "precio":1,
  "pais": "españa"
}
let producto2 =
{ "nombre":"mechero",
  "precio":10,
  "pais": "Marlboro"
}
let producto3 =
{ "nombre":"misil",
  "precio":100000,
  "pais": "corea"
}
let producto4 =
{ "nombre":"tuberia",
  "precio":8000,
  "pais": "mordor"
}
let productos = [producto1,producto2,producto3,producto4];

if(productos.pais==="españa")
{
    if(productos.precio>=2000)
    {
        productos.precio= productos.precio += ((productos.precio*16)/100);
    }
    else
    {
        productos.precio= productos.precio +=((productos.precio*10)/100);
    }   
}
else
{
    if(productos.precio>=2000)
    {
        productos.precio= productos.precio += ((productos.precio*26)/100);
    }
    else
    {
        productos.precio = productos.precio + (productos.precio*20)/100;
    }    
}
console.log(productos);
//necesitaria hacer un bucle for,para que pasase por el array,no se otra manera de hacerlo.
//--------------------------------------------------------------------------//
//Reto de bucles
console.log(linea + "1.Reto de bucles" + linea);
let resBucleFor=[];
for(i=0;i<101;i++)
{
    resBucleFor.push(i*i);
}
console.log(resBucleFor);
//--------------------------------------------------------------------------//
//2.Reto de bucles
console.log(linea + "2.Reto de bucles" + linea);

let arrBucle= [2,10,45,33,22,14]
let resArrBucle=[]
for (let valor of arrBucle)
{
    let acumulador = valor*2;
    resArrBucle.push(acumulador);
}
console.log(resArrBucle);
//--------------------------------------------------------------------------//
//Reto de funciones
console.log(linea + "Reto de funciones" + linea);

function ej1(num1,num2,num3,num4,num5)
{
    let arrayOrdenado=[num1,num2,num3,num4,num5];
    for(let value of arrayOrdenado)
    {
        if(value>value)
        {
            arrayOrdenado.push(value);
        }
        else
        {
         arrayOrdenado.unshift(value);   
        }
        return arrayOrdenado
    }
    return arrayOrdenado
}
console.log(ej1(5,7,2,9,6));
//----------------------------------^^^^^^------------------------------//
//----------------------------------||||||------------------------------//
//----------------------------------problemas---------------------------//
//----------------------------------------------------------------------//
//--------------------------------------------------------------------------//
//Reto de funciones
//2
console.log(linea + "2.Reto de funciones" + linea);

let oveja1 =
{
    "nombre":"Dolly",
    "color" : "morao"
}
let oveja2 =
{
    "nombre":"Suarseneguer",
    "color" : "rojo"
}
let oveja3 =
{
    "nombre":"willfred",
    "color" : "verde"
}
let oveja4 =
{
    "nombre":"Draugr",
    "color" : "azabache"
}
let oveja5 =
{
    "nombre":"eskelleOveji",
    "color" : "rojo"
}

let ovejas= [oveja1,oveja2,oveja3,oveja4,oveja5];

function listaOvejas(ovejas) 
{
    let listaOvejuna=[];
  for(let i=0;i<ovejas.length;i++)
  {
    if(ovejas[i].color=="rojo" && ovejas[i].nombre.includes("n"&&"a"))
    {
        listaOvejuna.push(ovejas[i]);
    }
    else
    {
        console.log("nada que mostrar.")
    }
  }
  
  return listaOvejuna;  
}
console.log(listaOvejas(ovejas));
//--------------------------------------------------------------------------//
//Reto de funciones
//3
console.log(linea + "3.Reto de funciones" + linea);


function seguridad(pass)
{
    for(let i=0;i<pass.length;i++)
    {
        if(pass.length<=7 || (/[A-Z]/.test(pass))==false || (/[a-z]/.test(pass))==false
            || /[0-9]/.test(pass)==false) 
        {
          return console.log("la contraseña no cumple los requisitos.")  
        }
        else{
           return console.log("la contraseña cumple los requisitos.")
        }
    }return 
}
console.log(seguridad("aasassdasasassd"))

//--------------------------------------------------------------------------//
//Reto final 1
console.log(linea + "Reto final" + linea);

let biblioteca = ["Ready player one","El nombre del viento","El temor de un hombre sabio","Cien años de soledad","Origen"];
for(let i=0;i<biblioteca.length;i++)
{  
    let numLetras = biblioteca[i].length;
    console.log(biblioteca[i] + "[" + numLetras  + "]")
    if(numLetras>biblioteca[i])
    {
        console.log(biblioteca[i].bold)
    }
}
//--------------------------------------------------------------------------//
//Reto final 2
console.log(linea + "Reto final 2" + linea);

let arrMulti = [];
    let temporal=[];
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            temporal.push(Math.floor(Math.random()*51));
        }
        arrMulti.push(temporal);
        temporal =[];
    }

//--------------------------------------------------------------------------//
//3.Reto final 2
console.log(linea + "3.Reto final 2" + linea);
let arrMulti2 = [];
     temporal=[];
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            temporal.push(Math.floor(Math.random()*51));
        }
        arrMulti2.push(temporal);
        temporal =[];
    }

    let arrMultiTotal = arrMulti.reduce(
        function(acc,val)
        {
            return acc+val;
        })
    console.log(arrMultiTotal);
    let arrMultiTotal2 = arrMulti2.reduce(
        function(acc,val)
        {
            return acc+val;
        })
        console.log(arrMultiTotal2);
//--------------------------------------------------------------------------//
//4.Reto final 2
console.log(linea + "4.Reto final 2" + linea);

let acuTotal=0;
for (let i = 0; i < arrMultiTotal.length; i++)
{
    acuTotal+= arrMultiTotal[i];
}

for (let i = 0; i < arrMultiTotal2.length; i++)
{
    acuTotal += arrMultiTotal2[i];
}
console.log(acuTotal);
//--------------------------------------------------------------------------//
//5.Reto final 2
console.log(linea + "5.Reto final 2" + linea);
let final=[];
for(let i=0;i<acuTotal.length;i++)
{
    final.push(acuTotal[i]*Math.floor(Math.random(2,5)*5))
}
console.log(final);