import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { AlertComponent } from './components/alert/alert.component';
import { LoadingSinnerComponent } from './components/loading-sinner/loading-sinner.component';



@NgModule({
  declarations: [
    PlaceholderDirective,
    LoadingSinnerComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PlaceholderDirective,
    LoadingSinnerComponent,
    AlertComponent,
  ]
})
export class SharedModule { }
