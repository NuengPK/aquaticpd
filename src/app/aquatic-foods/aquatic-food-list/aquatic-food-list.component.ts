import { Component, OnInit } from '@angular/core';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  aquaticFood:AquaticFood[] = [
    new AquaticFood("ปลาอินทรี",
    "This is a test",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Scomberomorus_commerson_Pakistan.jpg/375px-Scomberomorus_commerson_Pakistan.jpg"
    ),
    new AquaticFood("ปลาหมึก",
    "This is a test",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arrow_squid.jpg/300px-Arrow_squid.jpg"
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
