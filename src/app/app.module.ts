import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { AquaticFoodListComponent } from './aquatic-foods/aquatic-food-list/aquatic-food-list.component';
import { AquaticFoodItemComponent } from './aquatic-foods/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { DistributionEditComponent } from './distribution-list/distribution-edit/distribution-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    AquaticFoodListComponent,
    AquaticFoodsComponent,
    AquaticFoodItemComponent,
    AquaticFoodDetailComponent,
    DistributionListComponent,
    DistributionEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
