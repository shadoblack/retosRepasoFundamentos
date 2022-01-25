import {Mobile} from "./mobile"

let mobile1= new Mobile("Nokia3210","3210","Nokia",0,"Black",false,0,0);
let mobile2= new Mobile("iPhone3G","3G","apple",8,"white",false,1,25);
let mobile3= new Mobile("Samsung Galaxy 10","galaxy 10","Samsung",128,"white",false,4,399);

console.log(mobile1);
console.log(mobile2);
console.log(mobile3);

mobile1.setIs5G(true);
mobile1.setCameraNumber(4);

console.log(mobile1);

let arrMobile = [mobile1,mobile2,mobile3];
console.log("|-------------|impresiones de movil|--------------|");

mobile1.printAll();
console.log("|-------------|impresiones de movil del array|--------------|");
for (let val of arrMobile)
        {
            console.log("the characteristics of the mobile " + val.getName() +
            " are: \n" + "Name: " + val.getName() + " \n" + " Model: " + val.getModel() + " \n" + " Trademark: " +
            val.getTrademark() + " \n" + "SD Size (GB): " + val.getSdSize() + " \n"+ " Color: " + val.getColor() +
            " \n" +" Is 5g? " + val.getIs5G() + " \n" + " Number of Cameras: " + val.getCameraNumber())
        }


