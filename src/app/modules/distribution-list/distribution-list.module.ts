import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributionListRoutingModule } from './distribution-list-routing.module';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { DistributionEditComponent } from './components/distribution-edit/distribution-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DistributionListComponent,
    DistributionEditComponent,
  ],
  imports: [
    CommonModule,
    DistributionListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class DistributionListModule { }
