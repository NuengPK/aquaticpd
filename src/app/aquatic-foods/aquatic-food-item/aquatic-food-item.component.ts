import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AquaticFoodService } from 'src/app/shared/aquatic-food.service';
import { AuthService } from 'src/app/shared/auth.service';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css']
})
export class AquaticFoodItemComponent implements OnInit {
  aquaticFoodSubscription = new Subscription();
  isAuthenticate:boolean = true;

  aquaticFood!:AquaticFood[];

  constructor(private aquaticFoodService:AquaticFoodService) { }


  ngOnInit(): void {
    this.aquaticFood = this.aquaticFoodService.getAquaticFoods()
    this.aquaticFoodSubscription = this.aquaticFoodService.aquaticFoodSubject
    .subscribe(
      check => {
        this.isAuthenticate = check
        this.aquaticFood = this.aquaticFoodService.getAquaticFoods()
      }
    )
  }
}
