export class AquaticFood {
  public name: string;
  public description: string;
  public imagePath: string;
  public onHand:number;
  public quantity:number;

  constructor(name: string, desc: string, imagePath: string, onHand:number, qty:number){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.onHand = onHand;
    this.quantity = qty;
}
}
