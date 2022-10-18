import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Distribution } from '../models/distribution.model';

@Injectable({
  providedIn: 'root',
})

export class DistributionService {
  activedtedSubject = new Subject<Distribution>();
  checkNameOffSubject = new Subject<boolean>();

  private distritions: Distribution[] = [
    new Distribution('ปลาอินทรี', 10),
    new Distribution('หมึก', 20),
  ];

  constructor(private route: ActivatedRoute) { }

  getDistridution(): Distribution[] {
    return this.distritions;
  }

  addDistridutionOnService(name: string, quantity: number): boolean {
    let checkName = false;
    this.distritions.map((value: Distribution, index: number, array: Distribution[]) => {
      if (value.name === name) {
        checkName = true;
      } else {
        return;
      }
    });

    if (checkName === false) {
      this.distritions.push(new Distribution(name, quantity));
    }
    return checkName;
  }

  updateDistridutionOnService(name: string, quantity: number): void {
    const findName = this.distritions.find((s) => s.name === name.trim());
    console.log(findName);
  }

  addValueOnInput(value: string): Distribution | undefined {
    const dis = this.distritions.find(
      (v) => {
        return v.name == value;
      }
    );
    return dis;
  }

  deleteDistridutionOnService(name: string): void {
    this.distritions.map((value: Distribution, index: number) => {
      if (name === value.name) {
        this.distritions.splice(index, 1);
      }
    });
  }

}
