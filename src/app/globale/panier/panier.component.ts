import { MonserviceService } from './../../services/monservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitServiceService } from '../../services/produit-service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  commandeValider:any;
  id:any;
  detailpayement:any;
  etat="valider"
  img : any;
  searchText:any;
  constructor(private monService:MonserviceService,private route:ActivatedRoute,private produitService:ProduitServiceService,) { }

  ngOnInit(): void {
    this.getCommandeValider();
    this.img =this.produitService.PhotoProduitById
  }
  getCommandeValider(){
    this.monService.AfficheCommandeCour(this.etat).subscribe(data=>{
      this.commandeValider=data
    })
  }


 

}
