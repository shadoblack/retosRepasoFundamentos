//------------------------------------------------------------------//
//reto3
function operImpar(num:number)
{
for(let i=0;i<num;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
    else
    {
        null;
    }
}
}
console.log("|-----------------------------------|reto3|--------------------------|")
operImpar(89);
//---------------------------------------------------------//
//reto4

function reverseArray(arrIn:number[]):number[]
{
    let arrOut=[];
    for(let i = arrIn.length -1;i>-1;i--)
    {
       arrOut.push(arrIn[i]) 
    } 
    return arrOut;
}
console.log("|-----------------------------------|reto4|--------------------------|")
console.log(reverseArray([2,4,6,8,10]));
//--------------------------------------------------------//
//reto5



function rainbow(colorArr:string[])
{
    for(let i =0;i<colorArr.length;i++)
    {
        if(colorArr[i]>=("rojo"||"naranja"||"amarillo"||"verde"||"añil"||"azul"||"violeta"))
        {
            console.log(colorArr[i] + " pertenece al arcoiris");
        }
        
        else
        {
            console.log(colorArr[i] + " NO pertenece al arcoiris");
        }
        
    }    
}
console.log("|-----------------------------------|reto5|--------------------------|")
rainbow(["rojo","azul","amarillo","verde","añil","violeta","fucsia","ambar"]);
//-----------------------------------------------------------//
//reto6

function parExists(numArr:number[])
{
    for(let i=0;i<numArr.length;i++)
    {
        if(numArr[i]%2 ===0)
        {
            console.log(numArr[i] + " es par");
        }
        else
        {
            console.log(numArr[i] + " No es par")
        }
        
    }
    return;
}
console.log("|-----------------------------------|reto6|--------------------------|")
parExists([234,2354,2342,234,234,232,4,325,67,78,7,8,645,345342,3,4]);
//----------------------------------------------------------------//
//reto7

function arrNameM(arrNames:string[])
{
    for(let i=0;i<arrNames.length;i++)
    {
        let confirmator = true;
        if(arrNames[i][0]===("M"))
        {
           console.log( confirmator =true)
        }
        else
        {
         console.log(confirmator = false)
        }

    }
    return ;
}
console.log("|-----------------------------------|reto7|--------------------------|")
console.log(arrNameM(["Jhan","Shun","Lang"]));
//--------------------------------------------------------------//
//reto8

function sumaNumChar(arrNames:string[])
{
    let acumulator=0
    let acumulator2=0
    for(let i=0;i<arrNames.length;i++)
    {
        for(let i=0;i<arrNames.length;i++)
        {
           acumulator2=arrNames[i].length
        }
        acumulator= acumulator + acumulator2
        acumulator2=0
    }
    return acumulator;
}
console.log("|-----------------------------------|reto8|--------------------------|")
console.log(sumaNumChar(["Jhan","Shun","Lang"]));
//------------------------------------------------------------//
//reto9

function parImpar(num:number)
{
    if(num%2==0)
    {
        console.log("el número es par")
    }
    else
    {
        console.log("el número es impar")
    }
return;
}
console.log("|-----------------------------------|reto9|--------------------------|")
parImpar(6);
//--------------------------------------------------------------//
//reto10
console.log("|-----------------------------------|reto10|--------------------------|")
parImpar(sumaNumChar(["Casa","Coche","Ciudad","Cesta"]));
parImpar(sumaNumChar(["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]));
parImpar(sumaNumChar(["Venezuela","Veneno","Voltaje"]));