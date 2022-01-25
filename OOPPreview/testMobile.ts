import {Mobile} from "./mobile"

let mobile1= new Mobile("Nokia3210","3210","Nokia",0,"Black",false,0,0);
let mobile2= new Mobile("iPhone3G","3G","apple",8,"white",false,1,25);
let mobile3= new Mobile("Samsung Galaxy 10","galaxy 10","Samsung",128,"white",false,4,399);

console.log(mobile1);
console.log(mobile2);
console.log(mobile3);

mobile1.setIs5G(true)
mobile1.setCameraNumber(4);
console.log("|-------------|valores de movil 1 cambiado|--------------|")
console.log(mobile1);

