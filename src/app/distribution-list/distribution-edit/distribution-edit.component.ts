import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css']
})
export class DistributionEditComponent implements OnInit {
  @Output() addDistridutionInput = new EventEmitter<{name: string, qunatity: string}>();
  constructor() { }

  addDistridutionOnEdit(aquaticNameInput: HTMLInputElement,qunatityInput: HTMLInputElement){
  this.addDistridutionInput.emit({name:aquaticNameInput.value,qunatity:qunatityInput.value})

  };

  ngOnInit(): void {
  }

}
