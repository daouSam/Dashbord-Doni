import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardienGuard } from './gardien.guard';
import { LoginComponent } from './login/login.component';
import { MoiComponent } from './moi/moi.component';
import { SucuritGuard } from './sucurit.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [SucuritGuard]}, 
  { path: 'moi', component: MoiComponent, canActivate: [GardienGuard]}, 
  {
    path: 'globale', loadChildren: () => import('./globale/globale.module')
    .then(m => m.GlobaleModule), canActivate: [GardienGuard]
  },
  { path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
