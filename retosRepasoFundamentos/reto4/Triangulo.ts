import { Punto } from "./Punto";
export class Triangulo
{
   private x:number;
   private y:number;
   private z:number;

    constructor(x:number,y:number,z:number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    calcularLongitudLados():number[]
    {
        
        return [this.x,this.y,this.z];
    }
}