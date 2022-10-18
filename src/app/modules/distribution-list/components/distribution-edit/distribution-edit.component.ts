import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distribution } from 'src/app/core/models/distribution.model';
import { DistributionService } from 'src/app/core/services/distridution.service';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  checkName!: boolean;
  checkUpdate!: boolean;
  distribution!: Distribution;

  constructor(private distributionService: DistributionService) {}

  ngOnInit(): void {
    this.checkName = false;
    this.checkUpdate = false;

    this.distribution = {
      name: '',
      quantity: NaN,
    };

    this.distributionService.activedtedSubject.subscribe((distribution) => {
      this.distribution = distribution;
      this.checkUpdate = true;
      this.distributionService.checkNameOffSubject.subscribe((checkName)=>{
        this.checkName = checkName
      })
    });

  }

  addDistridutionOnEdit(): void {
    if (this.signupForm.valid) {
      this.checkName = this.distributionService.addDistridutionOnService(
        this.signupForm.value.aquaticNameInput,
        parseInt(this.signupForm.value.qunatityInput)
      );
    }
  }

  updateDistridutionOnEdit(): void {
    this.distributionService.updateDistridutionOnService(
      this.signupForm.value.aquaticNameInput,
      parseInt(this.signupForm.value.qunatityInput)
    );
  }

  onClear(): void {
    this.checkUpdate = false;
    this.distribution = {name:'',quantity:0};
  }

  onDelete(): void {
    this.distributionService.deleteDistridutionOnService(this.distribution.name)
    this.checkUpdate = false;
    this.signupForm.reset();
  }

}
