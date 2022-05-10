import { Component, OnInit } from '@angular/core';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css']
})
export class AquaticFoodItemComponent implements OnInit {
  aquaticFood:AquaticFood[] = [
    new AquaticFood("ปลาอินทรี",
    "This is a test",
    "https://th.wikipedia.org/wiki/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5"
    ),
    new AquaticFood("ปลาหมึก",
    "This is a test",
    "https://th.wikipedia.org/wiki/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5"
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
