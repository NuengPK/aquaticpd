import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { PageNotFontComponent } from './page-not-font/page-not-font.component';

const routes: Routes = [
  { path: '',redirectTo: '/AquaticFoods', pathMatch: 'full' },
  {
    path: 'AquaticFoods',
    component: AquaticFoodsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: AquaticEditComponent },
      { path: ':name', component: AquaticFoodDetailComponent },
      { path: ':name/edit', component: AquaticEditComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
  {
    path: 'DistributionList',
    component: DistributionListComponent,
    children: [{ path: ':name', component: DistributionListComponent }],
  },
  { path: '**', component: PageNotFontComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
// import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
// import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
// import { DistributionEditComponent } from './distribution-list/distribution-edit/distribution-edit.component';
// import { DistributionListComponent } from './distribution-list/distribution-list.component';
// import { PageNotFontComponent } from './page-not-font/page-not-font.component';

// const routes: Routes = [
//   { path: '', component: AquaticFoodsComponent},
//   { path: 'AquaticFoods', component: AquaticFoodsComponent ,children:[
//     {path: 'new',component: AquaticEditComponent},
//     {path: 'detail/:name',component: AquaticFoodDetailComponent},
//     {path: 'detail/:name/:index/:edit',component: AquaticEditComponent}
//   ]},
//   { path: 'DistributionList', component: DistributionListComponent ,children:[
//     {path: 'list/:value',component: DistributionListComponent}]},
//   { path: '**', component: PageNotFontComponent },

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
