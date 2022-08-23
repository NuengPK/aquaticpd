import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AquaticResolverService implements Resolve<AquaticFood> {
  //ยังไม่ได้ใช้งาน
  constructor(private dataStorageService: DataStorageService,private aquaticFoodService:AquaticFoodService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AquaticFood | Observable<AquaticFood> | Promise<AquaticFood> {
    let aquaticFood!:AquaticFood;
    this.dataStorageService.fetchAquatic().subscribe(()=>{
    //console.log(this.aquaticFoodService.OpenDescription(route.params['name']))
      return aquaticFood = this.aquaticFoodService.OpenDescription(route.params['name'])!
    })
      return aquaticFood
  }
}
