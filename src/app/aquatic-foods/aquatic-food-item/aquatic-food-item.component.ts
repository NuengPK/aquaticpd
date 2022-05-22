import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css']
})
export class AquaticFoodItemComponent implements OnInit {
  @Input() footLists!:{name: string, description:string, imagePath: string};
  @Output() openDescription = new EventEmitter<{name: string, description:string, imagePath: string}>();

  emitOpenDescription(){
    this.openDescription.emit(this.footLists)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
