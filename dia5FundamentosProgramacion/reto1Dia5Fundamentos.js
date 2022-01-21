function sum(op1,op2=0){
return  op1+op2
}
function subs(op1,op2=0){
  return  op1-op2  
}
function mult(op1,op2=0){
 return  op1*op2   
}
function div(op1,op2=0){
 return  op1/op2
}

console.log(sum(2,5))
console.log(subs(8,3))
console.log(mult(2,5))
console.log(div(84,5))



function calculadora(op,op1,op2)
{
  switch(op){
    case sum:
    console.log(sum(op1,op2))
    break;
    case subs:
    console.log(subs(op1,op2))
    break;
    case mult:
    console.log(mult(op1,op2))
    break;
    case div:
    console.log(div(op1,op2))
    break;
  }
    
}
calculadora(sum,4,5);
calculadora(subs,4,5);
calculadora(mult,4,5);
calculadora(div,4,5);
//-----------------------------------------------------------------//

let sumArrow = (op1,op2=0) => {return op1+op2 }
let subsArrow = (op1,op2=0) => {return op1-op2 }
let multArrow = (op1,op2=0) => {return op1*op2 }
let divArrow = (op1,op2=0) => {return op1/op2 }

console.log(sumArrow(5,6))
console.log(subsArrow(2,6))
console.log(multArrow(23,2))
console.log(divArrow(55,23))

let calculadoraArrow = (op,op1,op2) => {switch(op){case sumArrow:console.log(sumArrow(op1,op2));break;case subsArrow:console.log(subsArrow(op1,op2));break;case multArrow:console.log(multArrow(op1,op2));break;case divArrow:console.log(divArrow(op1,op2)) ;break;}}

calculadoraArrow(sumArrow,4,5);
calculadoraArrow(subsArrow,4,5);
calculadoraArrow(multArrow,4,5);
calculadoraArrow(divArrow,4,5);