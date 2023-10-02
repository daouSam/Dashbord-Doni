import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import { MoiComponent } from './moi/moi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ImageToDataUrlDirective } from 'ngx-image2dataurl';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    RippleModule,ConfirmDialogModule,
    ConfirmPopupModule,
    TableModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ImageToDataUrlDirective
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
