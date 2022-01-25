import { Punto } from "./Punto";
import { Triangulo } from "./triangulo";

let punto1 = new Punto(5,5);
let punto2 = new Punto(10,5);
let punto3 = new Punto(-5,5);
let punto4 = new Punto(-10,-5);

punto1.toString();
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto2));
console.log(punto1.calcularCuadrante());
punto1.calcularMasCercano([punto1,punto2,punto3,punto4]);

let triangulo1 = new Triangulo(5,5,5);
console.log(triangulo1.calcularLongitudLados());
