import { MonserviceService } from './../../services/monservice.service';
import { Component, OnInit } from '@angular/core';
import { CommandeServiceService } from './../../services/commande-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-liste-annuler',
  templateUrl: './liste-annuler.component.html',
  styleUrls: ['./liste-annuler.component.scss']
})
export class ListeAnnulerComponent implements OnInit {
  commandeAnnuler:any;
  etat="annuler"
  donnee:any;
  constructor(private monService:MonserviceService,private commandeService:CommandeServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getCommandeAnnuler();
  }
  getCommandeAnnuler(){
    this.monService.AfficheCommandeCour(this.etat).subscribe(data=>{
      console.log
      this.commandeAnnuler=data
      console.log(this.commandeAnnuler)

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
  etatmodificours(id : any){
    this.commandeService.CommandeById(id).subscribe((data)=>{
      console.log(data)
      this.donnee=data
      this.monService.UpdateEtat(this.donnee.id,this.donnee).subscribe((data)=>{
        this.presentToast();
        this.route.navigateByUrl("/globale/listeCommande")
        this.ngOnInit();
       
      })
    })
  }
}
