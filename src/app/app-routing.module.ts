import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFontComponent } from './components/page-not-font/page-not-font.component';

const routes: Routes = [
  { path: '',redirectTo: '/AquaticFoods', pathMatch: 'full' },

  {
    path: 'AquaticFoods',
    loadChildren: () => import('./modules/aquatic-foods/aquatic-food.module')
    .then(m => m.AquaticFoodModule)
  },

  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule)
  },

  {
    path: 'DistributionList',
    loadChildren: () => import('./modules/distribution-list/distribution-list.module')
    .then(m => m.DistributionListModule)
  },

  {
    path: '**',
    component: PageNotFontComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
