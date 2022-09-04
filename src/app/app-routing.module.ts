import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AquaticEditComponent } from './aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
import { IntroductoryTextComponent } from './aquatic-foods/introductory-text/introductory-text.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { PageNotFontComponent } from './page-not-font/page-not-font.component';
import { DataOffResolverService } from './shared/resolver/data-off-resolver.service';
import { DataResolverService } from './shared/resolver/data-resolver.service';

const routes: Routes = [
  { path: '',redirectTo: '/AquaticFoods', pathMatch: 'full' },
  {
    path: 'AquaticFoods',
    resolve:{showDataAqutic: DataResolverService},
    component: AquaticFoodsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component:IntroductoryTextComponent},
      { path: 'new', component: AquaticEditComponent },
      { path: ':name', component: AquaticFoodDetailComponent ,
    //resolve:{aquaticData:AquaticResolverService}
  },
      { path: ':name/edit', component: AquaticEditComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
  {
    path: 'DistributionList',
    resolve:{showDataAqutic: DataOffResolverService},
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
