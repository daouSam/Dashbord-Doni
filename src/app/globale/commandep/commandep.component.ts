import { Component, OnInit } from '@angular/core';
import { CommandeServiceService } from 'src/app/services/commande-service.service';

@Component({
  selector: 'app-commandep',
  templateUrl: './commandep.component.html',
  styleUrls: ['./commandep.component.scss']
})
export class CommandepComponent implements OnInit {

  commande: any
  constructor(private commandserv: CommandeServiceService) { }

  ngOnInit(): void {
    this.commandserv.cmmdEnCours().subscribe((data) =>{
      this.commande = data     
    })
  }

  update(data){
    this.commandserv.cmmdEnValide(data).subscribe(() =>{
      console.log('succès');
      this.ngOnInit()      
    })   
  }

  detailcommande(data){
   alert('Affichage du détail commande paquet est pas prise en compte. Merci !')
  }
  
  annuler(data){
    alert('Annulation du commande paquet est pas prise en compte. Merci !')   
  }

}
