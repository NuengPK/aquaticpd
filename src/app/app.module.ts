import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { AquaticFoodListComponent } from './aquatic-foods/aquatic-food-list/aquatic-food-list.component';
import { AquaticDistributionListComponent } from './Distribution-List/aquatic-distribution-list.component';
import { AquaticDistributionEditComponent } from './Distribution-List/aquatic-distribution-edit/aquatic-distribution-edit.component';
import { AquaticFoodItemComponent } from './aquatic-foods/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    AquaticFoodListComponent,
    AquaticDistributionListComponent,
    AquaticDistributionEditComponent,
    AquaticFoodsComponent,
    AquaticFoodItemComponent,
    AquaticFoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
