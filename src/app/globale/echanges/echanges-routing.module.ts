import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardienGuard } from 'src/app/gardien.guard';
import { EchabodyComponent } from './echabody/echabody.component';
import { EchalayoutComponent } from './echalayout/echalayout.component';

const routes: Routes = [
  {
    path: '', component: EchalayoutComponent, children: [
      {
        path: '', component: EchabodyComponent
      },
      {
        path: 'echabody', component: EchabodyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchangesRoutingModule { }
