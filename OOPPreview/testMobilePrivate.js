"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobile1 = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", 0, "Black", false, 0, 0);
var mobile2 = new mobile_1.Mobile("iPhone3G", "3G", "apple", 8, "white", false, 1, 25);
var mobile3 = new mobile_1.Mobile("Samsung Galaxy 10", "galaxy 10", "Samsung", 128, "white", false, 4, 399);
console.log(mobile1);
console.log(mobile2);
console.log(mobile3);
mobile1.setIs5G(true);
mobile1.setCameraNumber(4);
console.log(mobile1);
var arrMobile = [mobile1, mobile2, mobile3];
console.log("|-------------|impresiones de movil|--------------|");
mobile1.printAll();
console.log("|-------------|impresiones de movil del array|--------------|");
for (var _i = 0, arrMobile_1 = arrMobile; _i < arrMobile_1.length; _i++) {
    var val = arrMobile_1[_i];
    console.log("the characteristics of the mobile " + val.getName() +
        " are: \n" + "Name: " + val.getName() + " \n" + " Model: " + val.getModel() + " \n" + " Trademark: " +
        val.getTrademark() + " \n" + "SD Size (GB): " + val.getSdSize() + " \n" + " Color: " + val.getColor() +
        " \n" + " Is 5g? " + val.getIs5G() + " \n" + " Number of Cameras: " + val.getCameraNumber());
}
