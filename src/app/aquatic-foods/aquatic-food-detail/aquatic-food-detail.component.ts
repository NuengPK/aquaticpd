import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css']
})
export class AquaticFoodDetailComponent implements OnInit {
  @Input() data!:{name: string, description:string, imagePath: string};

  constructor() { }

  ngOnInit(): void {
  }

}
