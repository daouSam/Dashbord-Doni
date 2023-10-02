import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { GlobaleRoutingModule } from './globale-routing.module';
import { AppglComponent } from './appgl/appgl.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { OrderByPipe } from '../order-by.pipe';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutPaysansComponent } from './ajout-paysans/ajout-paysans.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { CampagneComponent } from './campagne/campagne.component';
import { CoatchDetailComponent } from './coatch-detail/coatch-detail.component';
import { CoatchModifiComponent } from './coatch-modifi/coatch-modifi.component';
import { CoatchComponent } from './coatch/coatch.component';
import { DetailCerealeComponent } from './detail-cereale/detail-cereale.component';
import { DetailPaysansComponent } from './detail-paysans/detail-paysans.component';
import { DetailangraisComponent } from './detailangrais/detailangrais.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { ListAngraisComponent } from './list-angrais/list-angrais.component';
import { ListCerealeComponent } from './list-cereale/list-cereale.component';
import { ListeAnnulerComponent } from './liste-annuler/liste-annuler.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { MenuComponent } from './menu/menu.component';
import { ModifiAngraisComponent } from './modifi-angrais/modifi-angrais.component';
import { ModifiCerealeComponent } from './modifi-cereale/modifi-cereale.component';
import { ModifiProduitComponent } from './modifi-produit/modifi-produit.component';
import { PanierComponent } from './panier/panier.component';
import { PayementComponent } from './payement/payement.component';
import { PaysansCommandeAnnulerComponent } from './paysans-commande-annuler/paysans-commande-annuler.component';
import { PaysansCommandeValideComponent } from './paysans-commande-valide/paysans-commande-valide.component';
import { PaysansValideComponent } from './paysans-valide/paysans-valide.component';
import { PaysansComponent } from './paysans/paysans.component';
import { RejetComponent } from './rejet/rejet.component';
import { StockComponent } from './stock/stock.component';
import { AjoutpaquetComponent } from './ajoutpaquet/ajoutpaquet.component';
import { ModifiepaquetComponent } from './modifiepaquet/modifiepaquet.component';
import { DetailpaquetComponent } from './detailpaquet/detailpaquet.component';
import { ListpaquetComponent } from './listpaquet/listpaquet.component';
import { RouterModule } from '@angular/router';
import { CommandepComponent } from './commandep/commandep.component';
import { CommdpvalideComponent } from './commdpvalide/commdpvalide.component';
import { ProduitServiceService } from '../services/produit-service.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from './../../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ImageToDataUrlDirective } from "ngx-image2dataurl";


@NgModule({
  declarations: [
    AppglComponent,
    MenuComponent,
    ListeProduitComponent,
    AjoutProduitComponent,
    PaysansComponent,
    DetailPaysansComponent,
    ListeCommandeComponent,
    AccueilComponent,
    AjoutPaysansComponent,
    PanierComponent,
    CampagneComponent,
    StockComponent,
    ListCerealeComponent,
    ListAngraisComponent,
    DetailproduitComponent,
    DetailCerealeComponent,
    DetailangraisComponent,
    RejetComponent,
    CoatchComponent,
    PaysansValideComponent,
    PaysansCommandeValideComponent,
    PaysansCommandeAnnulerComponent,
    ListeAnnulerComponent,
    ModifiProduitComponent,
    ModifiCerealeComponent,
    ModifiAngraisComponent,
    CoatchDetailComponent,
    CoatchModifiComponent,
    PayementComponent,
    AjoutpaquetComponent,
    ModifiepaquetComponent,
    DetailpaquetComponent,
    ListpaquetComponent,
    OrderByPipe,
    CommandepComponent,
    CommdpvalideComponent
  ],
  imports: [
    CommonModule,
    GlobaleRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    Ng2SearchPipeModule,
    RippleModule,ConfirmDialogModule,
    ConfirmPopupModule,
    RouterModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    AngularFireStorageModule,
    ImageToDataUrlDirective
  ],
  // providers: [
  //   ConfirmationService],
  bootstrap: [AppglComponent]
})
export class GlobaleModule { }
