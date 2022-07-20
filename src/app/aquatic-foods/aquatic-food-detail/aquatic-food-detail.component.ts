import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFoodService } from 'src/app/shared/aquatic-food.service';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css'],
})
export class AquaticFoodDetailComponent implements OnInit {
  aquaticFood!:AquaticFood;

  constructor(private route: ActivatedRoute,private aquaticFoodService:AquaticFoodService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.aquaticFood = this.aquaticFoodService.OpenDescription(params['name'])!;
      }
    )
  }
}
