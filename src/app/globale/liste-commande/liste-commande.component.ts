import { CommandeServiceService } from './../../services/commande-service.service';
import { Component, OnInit } from '@angular/core';
import { MonserviceService } from './../../services/monservice.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss'],
  providers: [MessageService],
})
export class ListeCommandeComponent implements OnInit {
  commande:any;
  donnee:any;
  etat="cours";
  img:any;
  constructor(private commandeService:CommandeServiceService,
    private monservice:MonserviceService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCommande();
    this.img =this.commandeService.PhotoProduitById
  }
  getCommande(){
    this.monservice.AfficheCommandeCour(this.etat).subscribe(data => {
      this.commande = data
    })
  }

  detailcommande(dato: any){
    this.router.navigate(['/globale/energie/detail', dato])    
  }

  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Commande Valider avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }

  presentToastAnnuler(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: "vous venez d'annuler une commande",
      showConfirmButton: false,
      timer: 3000
    })
  }

  update(id : any){
    this.commandeService.CommandeById(id).subscribe((data)=>{
      this.donnee=data
      this.commandeService.updateEtatCommande(this.donnee.id,this.donnee).subscribe((data)=>{
        this.ngOnInit();    
        this.presentToast();
      })
    })
  }
  annuler(id : any){
    this.commandeService.CommandeById(id).subscribe((data)=>{
      this.donnee=data
      this.commandeService.annulerEtatCommande(this.donnee.id,this.donnee).subscribe((data)=>{
        this.presentToastAnnuler();
        this.ngOnInit();
      })
    })
  }


}
