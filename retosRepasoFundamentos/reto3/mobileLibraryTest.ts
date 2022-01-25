import { Mobile } from "../OOPPreview/mobile";
import { MobileLibrary } from "./mobileLibrary";


let mobile1= new Mobile("Nokia3210","3210","Nokia",0,"Black",false,0,0);
let mobile2= new Mobile("iPhone3G","3G","apple",8,"white",false,1,25);
let mobile3= new Mobile("Samsung Galaxy 10","galaxy 10","Samsung",128,"white",false,4,399);
let mobile4= new Mobile("iPhone5G","5G","apple",1024,"Beige",true,8,1899);

let library= new MobileLibrary("first Library","home",[mobile1,mobile2,mobile3,mobile4])
console.log("|------------------------|muestra libreria|-----------------|")
console.log(library);
library.setName("libreriaExtensa");
console.log(library.getName());
library.setLocation("raiz");
console.log(library.getLocation());
library.setMobiles([mobile1,mobile2,mobile3,mobile4]);
console.log(library.getMobiles());
console.log("|------------------------|cambio valores precios|-----------------|")
library.setTotalPrice(200);
console.log(library.getTotalPrice());
console.log(library.totalPriceCalculation());
console.log("|------------------------|impresion libreria|-----------------|")
library.printLibrary();

