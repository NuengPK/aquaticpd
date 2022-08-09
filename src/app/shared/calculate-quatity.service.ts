import { Injectable } from '@angular/core';
import { AquaticFoodService } from './aquatic-food.service';
import { DistributionService } from './distridution.service';

@Injectable({
  providedIn: 'root',
})
export class CalculateQuatityService {
  constructor(
    private aquaticFoodService: AquaticFoodService,
    private distributionService: DistributionService
  ) {}

  Aquantity = this.aquaticFoodService.getAquaticFoods();
  Dquantity = this.distributionService.getDistridution();

  calculate(){
    for (let j = 0; j < this.Aquantity.length; j++){
      for (let i = 0; i < this.Dquantity.length; i++) {
        if (this.Dquantity[i].name === this.Aquantity[j].name.trim()) {
          this.Aquantity[j].onHand = this.Aquantity[j].quantity - this.Dquantity[i].quantity;
        }
      }
    }
  }


}
