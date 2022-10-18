import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AquaticFood } from 'src/app/core/models/aquaticFood.model';
import { DataStorageService } from 'src/app/core/services/data-storage.service';
import { AquaticFoodService } from '../../core/services/aquatic-food.service';

@Injectable({
  providedIn: 'root',
})
export class AquaticResolverService implements Resolve<AquaticFood[]> {
  //ยังไม่ได้ใช้งาน
  constructor(
    private dataStorageService: DataStorageService,
    private aquaticFoodService: AquaticFoodService
    ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AquaticFood[]> | Promise<AquaticFood[]> {

    return this.dataStorageService.fetchAquatic()
    // this.dataStorageService.fetchAquatic().subscribe(() => {
    //   //console.log(this.aquaticFoodService.OpenDescription(route.params['name']))
    //   return aquaticFood = this.aquaticFoodService.openDescription(route.params['name'])!;
    // })

    // return aquaticFood
  }

}
