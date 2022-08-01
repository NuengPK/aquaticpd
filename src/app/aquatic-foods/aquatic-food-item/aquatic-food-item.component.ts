import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AquaticFoodService } from 'src/app/shared/aquatic-food.service';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css']
})
export class AquaticFoodItemComponent implements OnInit {
  aquaticFood!:AquaticFood[];

  constructor(private aquaticFoodService:AquaticFoodService) { }


  ngOnInit(): void {
    this.aquaticFood = this.aquaticFoodService.getAquaticFoods()
  }
}
