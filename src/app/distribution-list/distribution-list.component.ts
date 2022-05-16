import { Component, OnInit } from '@angular/core';
import { Distribution } from '../shared/distribution.model';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css']
})
export class DistributionListComponent implements OnInit {

  distritions:Distribution[] = [
    new Distribution("ปลาอินทรี",10),
    new Distribution("หมึก",20)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
