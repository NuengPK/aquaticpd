import { Component, Input, OnInit } from '@angular/core';
import { AquaticFood } from 'src/app/core/models/aquaticFood.model';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  @Input() data?: AquaticFood[];


  constructor() { }
  ngOnInit(): void {
  }
}
