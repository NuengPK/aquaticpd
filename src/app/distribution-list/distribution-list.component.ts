import { Component, OnInit } from '@angular/core';
import { Distribution } from '../shared/distribution.model';
import { DistridutionService } from '../shared/distridution.service';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {

  checkName: boolean = false;
  constructor(private distridutionService:DistridutionService) {}
  distritions = this.distridutionService.getDistridution()
  addDistridutionOnList(data: any) {
    this.checkName = false; //เป็นการเซ็ตค่าเริ่มต้นเพื่อใช้งานโปรแกรม
    //this.distritions.push({name:data.name,qunatity:data.qunatity})
    // if (this.distritions[this.distritions.length-1].name === data.name) {
    //   this.distritions[this.distritions.length-1].qunatity += parseInt(data.qunatity)
    //}else {
    //   this.distritions.push({name:data.name,qunatity:data.qunatity});
    //}
    for (let i: number = 0; i < this.distritions.length; i++) {
      //console.log(this.distritions[i].name.includes(data.name), i);
      if (this.distritions[i].name===data.name.trim()) {
          this.distritions[i].qunatity += parseInt(data.qunatity);
          this.checkName = true;
      }
    }
    if (this.checkName == false) {
      this.distritions.push({
        name: data.name.trim(),
        qunatity: parseInt(data.qunatity)
      });
    }
  }
  ngOnInit(): void {}
}
