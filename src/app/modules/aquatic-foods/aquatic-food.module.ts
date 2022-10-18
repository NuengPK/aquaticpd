import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AquaticFoodRoutingModule } from './aquatic-food-routing.module';
import { AquaticEditComponent } from './components/aquatic-edit/aquatic-edit.component';
import { AquaticFoodListComponent } from './components/aquatic-food-list/aquatic-food-list.component';
import { AquaticFoodItemComponent } from './components/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodDetailComponent } from './components/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodsComponent } from './aquatic-food/aquatic-foods.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AquaticFoodsComponent,
    AquaticEditComponent,
    AquaticFoodListComponent,
    AquaticFoodItemComponent,
    AquaticFoodDetailComponent,
  ],
  imports: [
    CommonModule,
    AquaticFoodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})

export class AquaticFoodModule { }
