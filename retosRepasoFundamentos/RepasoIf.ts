//reto1
function horoscopo(month)
{
    switch(month)
    {
    case 1:console.log("capricornio")
    break;
    case 2:console.log("acuario")
    break;
    case 3:console.log("piscis")
    break;
    case 4:console.log("aries")
    break;
    case 5:console.log("tauro")
    break;
    case 6:console.log("geminis")
    break;
    case 7:console.log("cancer")
    break;
    case 8:console.log("leo")
    break;
    case 9:console.log("virgo")
    break;
    case 10:console.log("libra")
    break;
    case 11:console.log("escorpio")
    break;
    case 12:console.log("sagitario")
    break;
    
    }
    return
}
console.log("|-----------------------------------|reto1|--------------------------|")
horoscopo(6);
//------------------------------------------------------------//
//reto2

console.log("|-----------------------------------|reto2|--------------------------|")
function localizacion(pais:string)
{

if(pais === ("españa"||"francia"||"alemania"||"italia"||"ucrania"))
{
    console.log("estas en europa");
}
else if(pais === ("argelia"||"egipto"||"libia"||"marruecos"||"mauritania"))
{
    console.log("estas en africa");
}
else if(pais === ("Myanmar" ||"Tailandia"|| "Vietnam"|| "Camboya"|| "Laos"))
{
    console.log("estas en asia");
}
else if(pais === ("Brasil"|| "Chile"|| "Colombia"|| "Ecuador"|| "Guyana"))
{
    console.log("estas en america");
}
else if(pais === ("Australia"||"Fiyi"||"Islas Marshall"||"Islas Salomón"||" Kiribati"))
{
    console.log("estas en oceania");
}
else
{
    console.log("no esta en la base de datos")
}
}
localizacion("Australia");
