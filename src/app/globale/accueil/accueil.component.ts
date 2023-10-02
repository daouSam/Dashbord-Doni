import { ProduitServiceService } from '../../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { MonserviceService } from '../../services/monservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  achete:any;
  etat:any;
  commandeAcheter:any;
  constructor(private produitService:ProduitServiceService,private monService:MonserviceService) { }

  ngOnInit(): void {
    this.getCommandeAcheter();
  }
  getCommandeAcheter(){
    this.monService.AfficheAchete().subscribe(data=>{
      console.log
      this.commandeAcheter=data
      console.log(this.commandeAcheter)

    })
  }
}
