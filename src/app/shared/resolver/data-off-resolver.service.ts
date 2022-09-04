import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AquaticFoodService } from '../aquatic-food.service';

@Injectable({
  providedIn: 'root'
})
export class DataOffResolverService implements Resolve<boolean> {

  constructor(private aquaticFoodService:AquaticFoodService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.aquaticFoodService.aquaticDataSubject.next(false)
    return false
  }
}
