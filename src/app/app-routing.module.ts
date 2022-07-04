import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { PageNotFontComponent } from './page-not-font/page-not-font.component';


const routes: Routes = [
  { path: 'AquaticFoods', component: AquaticFoodsComponent ,children:[
    {path: ':name',component: AquaticFoodDetailComponent},
    {path: 'new'},
    {path: ':index/edit'}
  ]},
  { path: 'DistributionList', component: DistributionListComponent ,children:[
    {path: ':name',component: DistributionListComponent}]},
  { path: '**', component: PageNotFontComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
