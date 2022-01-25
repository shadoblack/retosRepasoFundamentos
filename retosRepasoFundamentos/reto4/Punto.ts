export class Punto
{
    private x:number;
    private y:number;

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }

    public getX(): number { return this.x};
    public setX(x: number):void {this.x = x};

    public getY(): number { return this.y};
    public setY(y: number):void {this.y = y};




    toString()
    {
        return console.log(String(this.x)+ "," + String(this.y));
    }

    distanciaAlOrigen():number
    {
        return this.x - this.y;
    }

    calcularDistancia(otroPunto:Punto):number
    {
        this.distanciaAlOrigen()
        return this.distanciaAlOrigen() + otroPunto.distanciaAlOrigen () ;
    }

    calcularCuadrante():number
    {
        
        
         if((this.x && this.y)>-1)
        {
            return 1;
        }
        else if(this.x <0 && this.y>-1)
        {
            return 2;
        }
        else if((this.x && this.y)<0)
        {
            return 3;
        }
        else if(this.x>-1 && this.y<0)
        {
            return 4;
        }
        else
        {
            return 0;
        }
    }

    calcularMasCercano(puntos:Punto[]):Punto
    {
        
        return;
    }
    

}