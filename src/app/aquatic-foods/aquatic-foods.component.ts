import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquatic-foods',
  templateUrl: './aquatic-foods.component.html',
  styleUrls: ['./aquatic-foods.component.css']
})
export class AquaticFoodsComponent implements OnInit {
  openDescriptions!:{name: string, description:string, imagePath: string};
  check = false;

  getValueOpenDescription(openDescription:any){
    this.openDescriptions = openDescription;
    this.check = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
