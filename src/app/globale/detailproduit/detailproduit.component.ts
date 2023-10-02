import { ProduitServiceService } from './../../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.scss']
})
export class DetailproduitComponent implements OnInit {
detailprod:any;
id:any;
img:any;
public imgfile : any = File;
catcat: string = '';
  constructor(private produitService:ProduitServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitService.detailProduit(this.id).subscribe(data => {
      this.detailprod=data
      console.log(data);
      
      this.catcat = this.detailprod.categorie.type;
    });
    this.img =this.produitService.PhotoProduitById
  }

  detail(){

  }
}
