import { MonserviceService } from './../../services/monservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommandeServiceService } from '../../services/commande-service.service';

@Component({
  selector: 'app-paysans-valide',
  templateUrl: './paysans-valide.component.html',
  styleUrls: ['./paysans-valide.component.scss']
})
export class PaysansValideComponent implements OnInit {
id:any;
commandePaysans:any;
donnee:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private commandeService :CommandeServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.monservice.detailPaysansCommande(this.id).subscribe(data => {
      this.commandePaysans=data
      console.log(this.commandePaysans)
     });
  }
  update(id : any){
    this.commandeService.CommandeById(id).subscribe((data)=>{
      console.log(data)
      this.donnee=data
      this.commandeService.updateEtatCommande(this.donnee.id,this.donnee).subscribe((data)=>{
        console.log("modifier")
        this.ngOnInit()
      })
    })
  }
}
