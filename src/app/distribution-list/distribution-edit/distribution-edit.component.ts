import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distribution } from 'src/app/shared/distribution.model';
import { DistributionService } from 'src/app/shared/distridution.service';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  checkName!: boolean;
  checkUpDate!: boolean;
  distribution!: Distribution;

  constructor(private distributionService: DistributionService) {}
  ngOnInit(): void {
    this.checkName = false;
    this.checkUpDate = false;
    this.distribution = {
      name: '',
      quantity: NaN,
    };
    this.distributionService.activedtedEmitter.subscribe((distribution) => {
      this.distribution = distribution;
      this.checkUpDate = true;
    });
  }
  addDistridutionOnEdit() {
    if (this.signupForm.valid) {
      this.checkName = this.distributionService.addDistridutionOnService(
        this.signupForm.value.aquaticNameInput,
        parseInt(this.signupForm.value.qunatityInput)
      )

    }
  }
  updateDistridutionOnEdit() {
    this.distributionService.updateDistridutionOnService(
      this.signupForm.value.aquaticNameInput,
      parseInt(this.signupForm.value.qunatityInput)
    );
  }
  onClear() {
    this.checkUpDate = false;
  }
  onDelete() {
    this.distributionService.deleteDistridutionOnService(this.distribution.name)
    this.checkUpDate = false;
    this.signupForm.reset();
  }
}
