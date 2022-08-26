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
//<<<<<<< HEAD
import { PageNotFontComponent } from './page-not-font/page-not-font.component';
//=======
import { AquaticFoodService } from './shared/aquatic-food.service';
import { DistributionService } from './shared/distridution.service';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSinnerComponent } from './loading-sinner/loading-sinner.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { IntroductoryTextComponent } from './aquatic-foods/introductory-text/introductory-text.component';
//>>>>>>> Section---04-Service

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    AquaticFoodListComponent,
    AquaticFoodsComponent,
    AquaticFoodItemComponent,
    AquaticFoodDetailComponent,
    DistributionListComponent,
    DistributionEditComponent,
    PageNotFontComponent,
    AquaticEditComponent,
    AuthComponent,
    LoadingSinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    IntroductoryTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AquaticFoodService,DistributionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
