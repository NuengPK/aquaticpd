import { Subject } from 'rxjs';
import { AquaticFood } from '../models/aquaticFood.model';

export class AquaticFoodService {

  aquaticLoadingSubject = new Subject<boolean>();
  aquaticDataSubject = new Subject<boolean>();
  aquaticChangeSubject = new Subject<boolean>();
  // aquaticUpdataDatas = new Subject<AquaticFood[]>();

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
    //   'ทานกี่ครั้งก็ อร่อย',
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arrow_squid.jpg/300px-Arrow_squid.jpg',
    //   0,
    //   100,
    //   []
    // ),
  ];

  async getAquaticFoods(): Promise<AquaticFood[]> {
    return await this.aquaticFoods;
  }

  openDescription(name: string): AquaticFood | undefined {
    const detail = this.aquaticFoods.find((d) => d.name == name);
    return detail;
  }

  addAquaticByNum(num: number): AquaticFood | undefined {
    const detail = this.aquaticFoods.find(
      (value: AquaticFood, index: number, opject: AquaticFood[]) => index + 1 === num
    );
    return detail;
  }

  addAquaticFood(addAquatic: AquaticFood): void {
    this.aquaticFoods.push(addAquatic);
  }

  resetAquaticFood(): AquaticFood[] {
    return this.aquaticFoods = [];
  }

  setAquatic(aquaticFoods: AquaticFood[]): AquaticFood[] {
    return this.aquaticFoods = aquaticFoods;
  }

  updateAquatic(name: string, update: AquaticFood) {
    let findData: number | undefined = this.aquaticFoods.findIndex(value => name === value.name);
    this.aquaticFoods[findData] = update;
  }

  deleteAquatic(name: string): void {
    let index: number = this.aquaticFoods.findIndex((value) => name === value.name );
    this.aquaticFoods.splice(index, 1)
  }
}
