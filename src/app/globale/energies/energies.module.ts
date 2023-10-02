import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergiesRoutingModule } from './energies-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { ModifieComponent } from './modifie/modifie.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DetailComponent,
    ListeComponent,
    ModifieComponent
  ],
  imports: [
    CommonModule,
    EnergiesRoutingModule,
    RouterModule
  ]
})
export class EnergiesModule { }
