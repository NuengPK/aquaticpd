import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistridutionService {
  private distritions = [
    {name:'ปลาอินทรี', qunatity:10},
    {name:'หมึก', qunatity:20}
  ];
  getDistridution(){
    return this.distritions
  }
  constructor() { }
}
