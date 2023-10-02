import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchangesRoutingModule } from './echanges-routing.module';
import { EchabodyComponent } from './echabody/echabody.component';
import { EchalayoutComponent } from './echalayout/echalayout.component';
import { EchasideComponent } from './echaside/echaside.component';
// import { OrderByPipe } from './order-by.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EchabodyComponent,
    EchalayoutComponent,
    EchasideComponent
  ],
  imports: [
    CommonModule,
    EchangesRoutingModule,
    FormsModule
  ]
})
export class EchangesModule { }
