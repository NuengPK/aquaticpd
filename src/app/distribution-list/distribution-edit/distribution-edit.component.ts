import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Distribution } from 'src/app/shared/distribution.model';
import { DistributionService } from 'src/app/shared/distridution.service';

@Component({
  selector: 'app-distribution-edit',
  templateUrl: './distribution-edit.component.html',
  styleUrls: ['./distribution-edit.component.css'],
})
export class DistributionEditComponent implements OnInit {
  @ViewChild('aquaticNameInput') aquaticNameInput!: ElementRef;
  @ViewChild('qunatityInput') qunatityInput!: ElementRef;
  constructor(
    private distributionService: DistributionService,
    private route: ActivatedRoute
  ) {}
  distribution!: Distribution;
  addDistridutionOnEdit() {
    if (this.aquaticNameInput.nativeElement.value.trim() !== '') {
      this.distributionService.addDistridutionOnService(
        this.aquaticNameInput.nativeElement.value.trim(),
        parseInt(this.qunatityInput.nativeElement.value)
      );
    }
  }
  updateDistridutionOnEdit() {
    this.distributionService.updateDistridutionOnService(
      this.aquaticNameInput.nativeElement.value,
      parseInt(this.qunatityInput.nativeElement.value)
    );
  }
  ngOnInit(): void {
    if (
      this.route.params.subscribe((params: Params) => {
        params['name'] === undefined;
      })
    ) {

    } else {
      this.route.params.subscribe((params: Params) => {
        this.distribution = this.distributionService.addValueOnInput(
          params['name']
        )!;
      });
    }
  }
}
