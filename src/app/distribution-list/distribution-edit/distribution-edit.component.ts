import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css']
})
export class DistributionEditComponent implements OnInit {
  @Output() addDistridutionInput = new EventEmitter<{name: string, qunatity: string}>();

  @ViewChild('aquaticNameInput') aquaticNameInput!:ElementRef;
  @ViewChild('qunatityInput') qunatityInput!:ElementRef;
  constructor() { }

  addDistridutionOnEdit(){
  this.addDistridutionInput.emit({name:this.aquaticNameInput.nativeElement.value,qunatity:this.qunatityInput.nativeElement.value})

  };

  ngOnInit(): void {
  }

}
