import { Subject } from 'rxjs';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';

export class AquaticFoodService {
  aquaticFoodSubject = new Subject<boolean>();
  private aquaticFoods: AquaticFood[] = [
    // new AquaticFood(
    //   'ปลาอินทรี',
    //   'กินที อร่อยทั้งเรือน',
    //   'http://4.bp.blogspot.com/-oBRtL82nIJc/UhxGa2sB1LI/AAAAAAAAAF0/k1CEbItGXEU/s1600/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B9%8C+11.jpg',
    //   0,
    //   70,
    //   []
    // ),
    // new AquaticFood(
    //   'หมึก',
    //   'กินที อร่อยทั้งเรือน',
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arrow_squid.jpg/300px-Arrow_squid.jpg',
    //   0,
    //   100,
    //   []
    // ),
  ];
  getAquaticFoods() {
    return this.aquaticFoods;
  }
  OpenDescription(name: string) {
    const detail = this.aquaticFoods.find((d) => {
      return d.name == name;
    });
    return detail;
  }
  addAquaticFood(name: string, qty: number, url: string, detail: string, menu: Array<string>, onHand:number) {
    this.aquaticFoods.push(new AquaticFood(name, detail, url, onHand, qty, menu));
  }
  onfetchPostToArray(){
    return this.aquaticFoods = [];
  }
  upDateAquatic(name:string,upDate: AquaticFood) {
    return this.aquaticFoods.map((value: AquaticFood, index: number) => {
      if (name === value.name) {
        this.aquaticFoods[index] = upDate;
      }
    });
  }
  deleteAquatic(name: string) {
    this.aquaticFoods.map((value: AquaticFood, index: number) => {
      if (name === value.name) {
        this.aquaticFoods.splice(index, 1);
      }
    });
  }
}

//ng generate service <service name>
