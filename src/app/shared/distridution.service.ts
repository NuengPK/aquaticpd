import { fingerprint } from '@angular/compiler/src/i18n/digest';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Distribution } from './distribution.model';

@Injectable({
  providedIn: 'root',
})
export class DistributionService {
  private distritions: Distribution[] = [
    new Distribution('ปลาอินทรี', 10),
    new Distribution('หมึก', 20),
  ];
  constructor(private route:ActivatedRoute) {}

  getDistridution() {
    return this.distritions;
  }
  addDistridutionOnService(name: string, quantity: number) {
    let checkName:boolean = false;
    this.distritions.map((value: Distribution, index: number, array: Distribution[]) => {
      if (value.name === name) {
        value.quantity += quantity;
        checkName = true
      } else {
        return
      }
    });
    if(checkName === false){ this.distritions.push(new Distribution( name, quantity ));}
  }
    updateDistridutionOnService(name: string, quantity: number) {
    this.distritions.find((s) => {
      if (s.name === name.trim()) {
        return s.quantity = quantity;
      } else {
        return
      }
    });
  }
  addValueOnInput(value:string){
    const dis = this.distritions.find(
      (v)=>{
        return v.name == value
      }
    );
    return dis
  }
}
