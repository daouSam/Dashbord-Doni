import { ProduitServiceService } from './../../services/produit-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modifi-angrais',
  templateUrl: './modifi-angrais.component.html',
  styleUrls: ['./modifi-angrais.component.scss']
})
export class ModifiAngraisComponent implements OnInit {
  modifiProduit:any;
  id:any;
  listCategorie:any;
  cproduit: boolean = false;
  constructor(private produitService:ProduitServiceService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produitService.detailProduit(this.id).subscribe(data =>{
      this.modifiProduit = data;
      
      if(this.modifiProduit.cproduit){
        this.cproduit = true
      }            
    })
    this.AllCategorie();
  }
  AllCategorie(){
    this.produitService.AfficheCategorie().subscribe((data)=>{
    this.listCategorie = data
    })
  }
  
  onUpdate(){    
    this.produitService.UpdateProduit(this.modifiProduit.id, this.modifiProduit).subscribe(
      ()=>{        
          this.presentToast();
          this.produitService.modifieCaract(this.modifiProduit.cproduit).subscribe(() =>{
            this.presentToast();
          // this.router.navigateByUrl("/listeProduit")
          this.ngOnInit(); 
          })       
    })
  }
  
  
  ajoutCaracteristique(form: NgForm){
    this.produitService.ajouCaract(form.value).subscribe((data) =>{
      this.modifiProduit.cproduit = data
      this.produitService.UpdateProduit(this.modifiProduit.id, this.modifiProduit).subscribe((dataretour) =>{
          form.reset();
          this.presentToast();
          // this.router.navigateByUrl("/listeProduit")
          this.ngOnInit();       
      })

         
    })
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Matiere enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
 
}
