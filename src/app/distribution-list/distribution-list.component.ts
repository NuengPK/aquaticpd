import { Component, OnInit } from '@angular/core';
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
}
