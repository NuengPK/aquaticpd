import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  @Output() openDescription = new EventEmitter<string>();
  datas = ""
  aquaticFood:AquaticFood[] = [
    new AquaticFood("ปลาอินทรี",
    "กินที อร่อยทั้งเรือน",
    "http://4.bp.blogspot.com/-oBRtL82nIJc/UhxGa2sB1LI/AAAAAAAAAF0/k1CEbItGXEU/s1600/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B9%8C+11.jpg"
    ),
    new AquaticFood("ปลาหมึก",
    "สดใหม่ ไร้สาร กรอบกรม นุ่มลิ้น",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arrow_squid.jpg/300px-Arrow_squid.jpg"
    )
  ];
  getValueOpenDescription(data:any){
    this.datas=data
    this.openDescription.emit(this.datas)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
