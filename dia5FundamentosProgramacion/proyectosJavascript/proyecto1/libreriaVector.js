//--------------------------------------------------------------//
//reto3
module.exports= {crearVector,sumaVector,productoNumeroVector,restaVector,productoVector}
let tituloReto = "|---------------------------------------|";
console.log(tituloReto + " RETO 3 " + tituloReto);

function crearVector(n,m)
{
    let nuevoVector = [];
    for(i=0;i<n;i++)
    {
    nuevoVector.push(Math.floor(Math.random()*(m-0)));       
    }
return nuevoVector;}

function sumaVector(v1,v2)
{
let reduccion=0;
let acuV1=0;
let acuV2=0;
if(v1.length===v2.length)
{
for(i=0;i<v1.length;i++)
{
  acuV1= acuV1 +=v1[i] ;
  acuV2= acuV2 +=v2[i] ;
  reduccion=acuV1+acuV2;
}

}
else{
   console.log(" no cumple los requisitos,tienen que tener la misma longitud.") 
}
return reduccion;}

function productoNumeroVector(n,v)
{
let acumulador=0;
let multiAcumulador=0;
for(i=0;i<v.length;i++)
{
multiAcumulador=n*=v[i];
acumulador = multiAcumulador + acumulador;
}
return acumulador;}

function restaVector(v1,v2)
{
    let reduccion=0;
let acuV1=0;
let acuV2=0;
if(v1.length===v2.length)
{
for(i=0;i<v1.length;i++)
{
  acuV1= acuV1 +=v1[i] ;
  acuV2= acuV2 +=v2[i] ;
  reduccion=acuV1-acuV2;
}

}
else{
   console.log(" no cumple los requisitos,tienen que tener la misma longitud.") 
}
return reduccion;}

function productoVector(v1,v2)
{
    let acuV1=0;
    let acuV2=0;
    let resultado=0;
    if(v1.length===v2.length)
    {
        for(i=0;i<v1.length;i++)
        {
            acuV1= v1[i] +acuV1;
            acuV2= v2[i] +acuV2;
            resultado= acuV1*acuV2;
        }
    }
    else
    {
        console.log(" no cumple los requisitos,tienen que tener la misma longitud.") 
    }
return resultado;}
//--------------------------------------------------------------//
//reto4
console.log(tituloReto + " RETO 4 " + tituloReto);

function sumaVectorEachReto4(v1,v2)
{
    let acuV1=0;
    let acuV2=0;
    let resultSumVec=0;
    if(v1.length===v2.length)
    {
        v1.forEach(
            function (val, index)
            {
                acuV1= acuV1+v1[index];
            }
        )
        v2.forEach(
            function (val, index)
            {
                acuV2= acuV2+v2[index];
            }
        )
        resultSumVec= acuV1+acuV2;
    }
    else
    {
        console.log(" no cumple los requisitos,tienen que tener la misma longitud.");
    }
    return resultSumVec;}

function sumaVectorMapReto4(v1,v2)
{
    let resultSumVecMap =[];
   if(v1.length===v2.length)
   {
     resultSumVecMap = v1.map(function (value,index)
      {
        return value +v2[index];
      })
   }
   else
   {
    onsole.log(" no cumple los requisitos,tienen que tener la misma longitud.");
   } 
   return resultSumVecMap;}

function filtrarPares(v)
{
let arrFilt =v.filter(function(val,i)
{
    return val%2 ==0
})
return arrFilt;} 

function sumatorio(v)
{
  let redu =v.reduce(function (acc,val)
  {
      return acc+val;
  })
  return redu;}
//--------------------------------------------------------------//
//reto5
console.log(tituloReto + " RETO 5 " + tituloReto);

let CasiSiempreLog = (algo)=>{if(algo===null){console.log("Introduce algo")}else{console.log(algo)}}

//--------------------------------------------------------------//
//reto5
console.log(tituloReto + " RETO 6 " + tituloReto);

let multiply = (x,y) =>{return x*y}

console.log(multiply(5,5));

