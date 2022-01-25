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
console.log("|-------------|valores de movil 1 cambiado|--------------|");
console.log(mobile1);
