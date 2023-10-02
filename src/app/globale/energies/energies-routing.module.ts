import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardienGuard } from 'src/app/gardien.guard';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { ModifieComponent } from './modifie/modifie.component';

const routes: Routes = [
  {
    path: '', component: ListeComponent
  },
  {
    path: 'liste', component: ListeComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: 'modifie/:id', component: ModifieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnergiesRoutingModule { }
