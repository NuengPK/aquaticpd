import { Injectable } from '@angular/core';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';
import { Distribution } from './distribution.model';
import { DistributionService } from './distridution.service';

@Injectable({
  providedIn: 'root',
})
export class CalculateQuatityService {
  constructor(
    private aquaticFoodService: AquaticFoodService,
    private distributionService: DistributionService
  ) {}

  Dquantity:Distribution[] = this.distributionService.getDistridution();
//private calculateQuatityService:CalculateQuatityService

  calculate(Aquantity:AquaticFood[]){
    Aquantity.map((valueA: AquaticFood)=>{
      this.Dquantity.map((valueD: Distribution) =>{
        if (valueA.name.trim() === valueD.name) {
          valueA.onHand = valueA.quantity - valueD.quantity;
        }
      })
    })
  }


}
