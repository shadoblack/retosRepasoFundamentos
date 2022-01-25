export class Mobile
{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    public constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5G:boolean,cameraNumber:number,price:number)
    {
        this.name = name;
        this.model= model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;

    }
    public getName(): string { return this.name};
    public setName(name: string):void {this.name = name};
    
    public getModel(): string {return this.model};
    public setModel(model: string):void { this.model = model};
    
    public getTrademark(): string {return this.trademark};
    public setTrademark(trademark: string):void { this.trademark = trademark};
    
    public getSdSize(): number {return this.sdSize};
    public setSdSize(sdSize:number):void {this.sdSize = sdSize};
    
    public getColor(): string {return this.color};
    public setColor(color:string):void {this.color = color};
    
    public getIs5G(): boolean {return this.is5G};
    public setIs5G(is5G:boolean):void {this.is5G = is5G};
    
    public getCameraNumber():number {return this.cameraNumber};
    public setCameraNumber(cameraNumber:number):void {this.cameraNumber = cameraNumber}

    public getPrice():number { return this.price};
    public setPrice(price:number):void {this.price = price};

    public printAll(movilIn:void):string
    {
        for (let val in Mobile);
        {
            console.log("the characteristics of the mobile " + this.name +
            " are: \n" + "Name: " + this.name + " \n" + " Model: " + this.model + " \n" + " Trademark: " +
            this.trademark + " \n" + "SD Size (GB): " + this.sdSize + " \n"+ " Color: " + this.color +
            " \n" +" Is 5g? " + this.is5G + " \n" + " Number of Cameras: " + this.cameraNumber);
        }
        return;
    }
    
}
