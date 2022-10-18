import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataOffResolverService } from 'src/app/shared/resolvers/data-off-resolver.service';
import { DistributionListComponent } from './distribution-list/distribution-list.component';

const routes: Routes = [
 {
    path: '',
    resolve:{showDataAqutic: DataOffResolverService},
    component: DistributionListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DistributionListRoutingModule { }
