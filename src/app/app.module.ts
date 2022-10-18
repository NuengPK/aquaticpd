import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//<<<<<<< HEAD
//=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { headerComponent } from './components/header/header.component';
import { AquaticFoodService } from './core/services/aquatic-food.service';
import { DistributionService } from './core/services/distridution.service';
//>>>>>>> Section---04-Service

@NgModule({

  declarations: [
    AppComponent,
    headerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [AquaticFoodService,DistributionService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // } ใส่เพื่อ apiKey ต่อท้าย
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
