import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { PageNotFontComponent } from './page-not-font/page-not-font.component';


const routes: Routes = [
  { path: '', component: AquaticFoodsComponent },
  { path: 'DistributionList', component: DistributionListComponent },
  { path: '**', component: PageNotFontComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
