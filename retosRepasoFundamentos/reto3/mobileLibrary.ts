import { Mobile } from "../OOPPreview/mobile";

export class MobileLibrary
{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    public constructor(name:string,location:string,mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    public getName(): string { return this.name};
    public setName(name: string):void {this.name = name};

    public getLocation(): string { return this.location};
    public setLocation(location: string):void {this.location = location};

    public getMobiles(): Mobile[] { return this.mobiles};
    public setMobiles(mobiles: Mobile[]):void {this.mobiles = mobiles};

    public getTotalPrice(): number { return this.totalPrice};
    public setTotalPrice(totalPrice: number):void {this.totalPrice = totalPrice};

    public totalPriceCalculation(): number
    {
        let calc =0;
        for (let mobile of this.mobiles)
        {
           calc=  calc += mobile.getPrice()
        }
        return calc;

    }
        
    
    
    public printLibrary()
    {
        console.log("This is all my mobiles:")
        for (let val of this.mobiles)
        {
            console.log("the characteristics of the mobile " + val.getName() +
            " are: \n" + "Name: " + val.getName() + " \n" + " Model: " + val.getModel() + " \n" + " Trademark: " +
            val.getTrademark() + " \n" + "SD Size (GB): " + val.getSdSize() + " \n"+ " Color: " + val.getColor() +
            " \n" +" Is 5g? " + val.getIs5G() + " \n" + " Number of Cameras: " + val.getCameraNumber())
        }
        
    return 
    }
    
}