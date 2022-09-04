import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AquaticFoodService } from '../aquatic-food.service'

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<boolean> {

  constructor(private aquaticFoodService:AquaticFoodService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.aquaticFoodService.aquaticDataSubject.next(true)
    return true
  }
}
