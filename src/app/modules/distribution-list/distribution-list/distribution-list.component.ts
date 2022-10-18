import { Component, OnInit } from '@angular/core';
import { DistributionService } from 'src/app/core/services/distridution.service';
import { Distribution } from '../../../core/models/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {

  distributions!:Distribution[];

  constructor(private distributionService:DistributionService) {}

  ngOnInit(): void {
   this.distributions = this.distributionService.getDistridution()
  }

  onInput(f:Distribution): void {
    //console.log(f)
    this.distributionService.activedtedSubject.next(f);
    this.distributionService.checkNameOffSubject.next(false);
  }

}
