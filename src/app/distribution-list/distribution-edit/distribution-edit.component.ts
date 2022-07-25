import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Distribution } from 'src/app/shared/distribution.model';
import { DistributionService } from 'src/app/shared/distridution.service';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  // @ViewChild('aquaticNameInput') aquaticNameInput!: ElementRef;
  // @ViewChild('qunatityInput') qunatityInput!: ElementRef;
  constructor(
    private distributionService: DistributionService,
    private route: ActivatedRoute
  ) {}
  distribution: Distribution ={
    name: "",
    quantity: 0,
  };;
  addDistridutionOnEdit() {
    // if (this.aquaticNameInput.nativeElement.value.trim() !== '') {
    //   this.distributionService.addDistridutionOnService(
    //     this.aquaticNameInput.nativeElement.value.trim(),
    //     parseInt(this.qunatityInput.nativeElement.value)
    //   );
    // }
    // if (this.signupForm.value.aquaticNameInput !== '') {
    //   this.distributionService.addDistridutionOnService(
    //     this.signupForm.value.aquaticNameInput,
    //     parseInt(this.signupForm.value.qunatityInput)
    //   );
    // }
    if (this.signupForm.valid) {
        this.distributionService.addDistridutionOnService(
          this.signupForm.value.aquaticNameInput,
          parseInt(this.signupForm.value.qunatityInput)
        );
    }
  }
  updateDistridutionOnEdit() {
    // this.distributionService.updateDistridutionOnService(
    //   this.aquaticNameInput.nativeElement.value,
    //   parseInt(this.qunatityInput.nativeElement.value)
    // );
    this.distributionService.updateDistridutionOnService(
      this.signupForm.value.aquaticNameInput,
      parseInt(this.signupForm.value.qunatityInput)
    );
  }
  ngOnInit(): void {
    // if (
    //   this.route.params.subscribe((params: Params) => {
    //     params['name'] === undefined;
    //   })
    // ) {
    // } else {
    //   this.route.params.subscribe((params: Params) => {
    //     this.distribution = this.distributionService.addValueOnInput(
    //       params['name']
    //     )!;
    //   });
    // }
  }
  onSupmit(f: NgForm) {
    console.log(this.signupForm);
  }
}
