import { ActivatedRoute } from '@angular/router';
import { ProduitServiceService } from './../../services/produit-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cereale',
  templateUrl: './detail-cereale.component.html',
  styleUrls: ['./detail-cereale.component.scss']
})
export class DetailCerealeComponent implements OnInit {
id:any;
detailprod:any;
img:any;
  constructor(private produitService:ProduitServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.img =this.produitService.PhotoProduitById
    this.id = this.route.snapshot.params['id'];
    this.produitService.detailProduit(this.id).subscribe(data => {
      this.detailprod=data
     
    
    });
}}

