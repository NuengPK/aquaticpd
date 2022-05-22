import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquatic-foods',
  templateUrl: './aquatic-foods.component.html',
  styleUrls: ['./aquatic-foods.component.css']
})
export class AquaticFoodsComponent implements OnInit {
  datas!:{name: string, description:string, imagePath: string};
  check = false;

  getValueOpenDescription(data:any){
    this.datas = data;
    this.check = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
