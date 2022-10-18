export interface AquaticFood {

  _id?: string;
  name: string;
  description: string;
  imagePath: string;
  onHand: number;
  quantity: number;
  menu: Array<string>;

  // constructor(name: string, desc: string, imagePath: string, onHand: number, qty: number, menu: Array<string>) {
  //   this.name = name;
  //   this.description = desc;
  //   this.imagePath = imagePath;
  //   this.onHand = onHand;
  //   this.quantity = qty;
  //   this.menu = menu;
  // }
}
