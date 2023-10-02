import { MonserviceService } from './../../services/monservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paysans-commande-annuler',
  templateUrl: './paysans-commande-annuler.component.html',
  styleUrls: ['./paysans-commande-annuler.component.scss']
})
export class PaysansCommandeAnnulerComponent implements OnInit {
  commandeAnnulerPaysans:any
  id:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.monservice.detailPaysansCommande(this.id).subscribe(data => {
      this.commandeAnnulerPaysans=data
      console.log(this.commandeAnnulerPaysans)
     });
  }

}
