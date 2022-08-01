import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distribution } from '../shared/distribution.model';
import { DistributionService } from '../shared/distridution.service';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {
  constructor(private distributionService:DistributionService) {}
  distributions!:Distribution[];
  ngOnInit(): void {
   this.distributions = this.distributionService.getDistridution()
  }
  onInput(f:Distribution){
    this.distributionService.activedtedEmitter.next(f);
  }
}
