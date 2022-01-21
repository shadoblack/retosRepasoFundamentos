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
operImpar(89);
//---------------------------------------------------------//
//reto4

function reverseArray(arrIn:number[]):number[]
{
    let arrOut:number[]
    for(let i = arrIn.length -1;i>-1;i--)
    {
       arrOut.push(arrIn[i]) 
    } 
    return arrOut;
}

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
//----------------------------------------------------------------//
//reto7

function arrNameM(arrNames:string[]):boolean
{
    for(let i=0;i<arrNames.length;i++)
    {
        let confirmator:boolean;
        if(arrNames[i][0]===("N"))
        {
            confirmator ==true
        }
        else
        {
           confirmator == false
        }

    }
    return  ;
}
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
parImpar(6);
//--------------------------------------------------------------//
//reto10
parImpar(sumaNumChar(["Casa","Coche","Ciudad","Cesta"]));
parImpar(sumaNumChar(["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]));
parImpar(sumaNumChar(["Venezuela","Veneno","Voltaje"]));