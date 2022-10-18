import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverService } from 'src/app/shared/resolvers/data-resolver.service';
import { AuthGuard } from '../auth/auth.guard';
import { AquaticFoodsComponent } from './aquatic-food/aquatic-foods.component';
import { AquaticResolverService } from './aquatic-resolver.service';
import { AquaticEditComponent } from './components/aquatic-edit/aquatic-edit.component';
import { AquaticFoodDetailComponent } from './components/aquatic-food-detail/aquatic-food-detail.component';
import { IntroductoryTextComponent } from './components/introductory-text/introductory-text.component';

const routes: Routes = [
  {
    path: '',
    resolve:{
      aquaticFood: AquaticResolverService
    },
    component: AquaticFoodsComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: '',
        component: IntroductoryTextComponent
      },

      // {
      //   path: 'new',
      //   component: AquaticEditComponent
      // },

      {
        path: ':id',
        component: AquaticFoodDetailComponent
      },

      {
        path: ':id/edit',
        component: AquaticEditComponent
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AquaticFoodRoutingModule { }
