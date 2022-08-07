export class AquaticFood {
  public name: string;
  public description: string;
  public imagePath: string;
  public onHand:number;
  public quantity:number;
  public menu:Array<string>;

  constructor(name: string, desc: string, imagePath: string, onHand:number, qty:number, menu:Array<string>){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.onHand = onHand;
    this.quantity = qty;
    this.menu = menu;
}
}
