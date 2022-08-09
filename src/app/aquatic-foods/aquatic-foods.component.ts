import { Component, OnInit } from '@angular/core';
import { CalculateQuatityService } from '../shared/calculate-quatity.service';

@Component({
  selector: 'app-aquatic-foods',
  templateUrl: './aquatic-foods.component.html',
  styleUrls: ['./aquatic-foods.component.css']
})
export class AquaticFoodsComponent implements OnInit {

  constructor(private calculateQuatityService:CalculateQuatityService) { }

  ngOnInit(): void {
    this.calculateQuatityService.calculate()
  }

}
