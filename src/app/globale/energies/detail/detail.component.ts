import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonserviceService } from 'src/app/services/monservice.service';
import { ProduitServiceService } from 'src/app/services/produit-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailcom:any;
  id:any;
  img : any;
  commande: any;
  constructor(private monservice: MonserviceService,
    private route: ActivatedRoute,
    private produitService: ProduitServiceService) { }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    this.img =this.produitService.PhotoProduitById
    // this.
    this.monservice.CommandeById(this.id).subscribe(data => {
      this.commande = data
      console.log(this.commande);
      this.monservice.commandeparpanier(`${this.commande.panier.id}`).subscribe(data => {
        this.detailcom = data
        console.log(this.detailcom);        
       });      
     });
  }
  
  update(idp: number){

  }

  annuler(idp: number){

  }

}