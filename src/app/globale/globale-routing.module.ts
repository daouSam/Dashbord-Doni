import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardienGuard } from '../gardien.guard';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { AjoutpaquetComponent } from './ajoutpaquet/ajoutpaquet.component';
import { AppglComponent } from './appgl/appgl.component';
import { CampagneComponent } from './campagne/campagne.component';
import { CoatchDetailComponent } from './coatch-detail/coatch-detail.component';
import { CoatchModifiComponent } from './coatch-modifi/coatch-modifi.component';
import { CoatchComponent } from './coatch/coatch.component';
import { DetailCerealeComponent } from './detail-cereale/detail-cereale.component';
import { DetailPaysansComponent } from './detail-paysans/detail-paysans.component';
import { DetailangraisComponent } from './detailangrais/detailangrais.component';
import { DetailpaquetComponent } from './detailpaquet/detailpaquet.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { ListAngraisComponent } from './list-angrais/list-angrais.component';
import { ListCerealeComponent } from './list-cereale/list-cereale.component';
import { ListeAnnulerComponent } from './liste-annuler/liste-annuler.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ListpaquetComponent } from './listpaquet/listpaquet.component';
import { MenuComponent } from './menu/menu.component';
import { ModifiAngraisComponent } from './modifi-angrais/modifi-angrais.component';
import { ModifiCerealeComponent } from './modifi-cereale/modifi-cereale.component';
import { ModifiProduitComponent } from './modifi-produit/modifi-produit.component';
import { ModifiepaquetComponent } from './modifiepaquet/modifiepaquet.component';
import { PanierComponent } from './panier/panier.component';
import { PayementComponent } from './payement/payement.component';
import { PaysansCommandeAnnulerComponent } from './paysans-commande-annuler/paysans-commande-annuler.component';
import { PaysansCommandeValideComponent } from './paysans-commande-valide/paysans-commande-valide.component';
import { PaysansValideComponent } from './paysans-valide/paysans-valide.component';
import { PaysansComponent } from './paysans/paysans.component';
import { RejetComponent } from './rejet/rejet.component';
import { StockComponent } from './stock/stock.component';
import { CommandepComponent } from './commandep/commandep.component';
import { CommdpvalideComponent } from './commdpvalide/commdpvalide.component';

const routes: Routes = [
  { path: '', component: AppglComponent, 
    children: [
      { path: '', component: AccueilComponent},
      { path: 'menu', component: MenuComponent},
      { path: 'listeProduit', component: ListeProduitComponent},
      { path: 'listeProduit/:type', component: ListeProduitComponent},
      { path: 'ajoutProduit', component: AjoutProduitComponent},
      { path: 'paysans', component: PaysansComponent},
      { path: 'detailPaysans/:id', component: DetailPaysansComponent},
      { path: 'listeCommande', component: ListeCommandeComponent},
      { path: 'commdp', component: CommandepComponent },
      { path: 'commdpv', component: CommdpvalideComponent },
      { path: 'accueil', component: AccueilComponent},
      { path: 'ajoutPaysans', component: AjoutProduitComponent},
      { path: 'panier', component: PanierComponent},
      { path: 'campagne', component: CampagneComponent},
      { path: 'stock', component: StockComponent},
      { path: 'listCereale', component: ListCerealeComponent},
      { path: 'listAngrais', component: ListAngraisComponent},
      { path: 'rejet', component: RejetComponent},
      { path: 'Detailproduit/:id', component: DetailproduitComponent},
      { path: 'DetailCereale/:id', component: DetailCerealeComponent},
      { path: 'DetailAngrais/:id', component: DetailangraisComponent},
      { path: 'coatch', component: CoatchComponent},
      { path: 'listeAnnuler', component: ListeAnnulerComponent},
      { path: 'paysansValide/:id', component: PaysansValideComponent},
      { path: 'paysansCommandeValide/:id', component: PaysansCommandeValideComponent},
      { path: 'paysansCommandeAnnuler/:id', component: PaysansCommandeAnnulerComponent},
      { path: 'modifiProduit/:id', component: ModifiProduitComponent},
      { path: 'modifiCereale/:id', component:ModifiCerealeComponent},
      { path: 'modifiAngrais/:id', component: ModifiAngraisComponent},
      { path: 'coatchDetail/:id', component:CoatchDetailComponent},
      { path: 'coatchModifi/:id', component: CoatchModifiComponent},
      { path: 'payement/:id', component: PayementComponent},
      { path: 'paquet' , component: ListpaquetComponent },
      { path: 'paquetajout' , component: AjoutpaquetComponent },
      { path: 'paquetmodifie' , component: ModifiepaquetComponent },
      { path: 'paquetdetail' , component: DetailpaquetComponent },
      {
        path: 'echanges', loadChildren: () => import('./echanges/echanges.module')
        .then(m => m.EchangesModule)
      },
      { 
        path: 'energie', loadChildren: () => import('./energies/energies.module')
        .then(m => m.EnergiesModule)
      },
    ]
    
  },
  // { path: '', redirectTo: 'appgl', pathMatch: 'full' , canActivate: [GardienGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobaleRoutingModule { }
