import { ProduitServiceService } from './../../services/produit-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-angrais',
  templateUrl: './list-angrais.component.html',
  styleUrls: ['./list-angrais.component.scss'],
  styles: [`
  .outofstock {
      font-weight: 700;
      color: #FF5252;
      text-decoration: line-through;
  }

  .lowstock {
      font-weight: 700;
      color: #FFA726;
  }

  .instock {
      font-weight: 700;
      color: #66BB6A;
  }

  :host ::ng-deep .row-accessories {
      background-color: rgba(0,0,0,.15) !important;
  }
`
]
})
export class ListAngraisComponent implements OnInit {
  produit:any;
  img : any;
  constructor(private produitService:ProduitServiceService) { }

  ngOnInit(): void {
    this.getProduit();
    this.img =this.produitService.PhotoProduitById
  }
  getProduit(){
    this.produitService.AfficheProduit().subscribe(data=>{
      this.produit=data
    })
  }

  supprimer(id:any){
    this.produitService.deleteProduit(id).subscribe(() =>{
      alert("supprimer")
      this.ngOnInit()
    })
  }
}
