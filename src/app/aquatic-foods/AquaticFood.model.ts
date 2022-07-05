export class AquaticFood {
  public name: string;
  public description: string;
  public imagePath: string;
  public quantity:number;
  public onHand:number;

  constructor(name: string, desc: string, imagePath: string, qty:number, onHand:number){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.quantity = qty;
    this.onHand = onHand;
}
}
