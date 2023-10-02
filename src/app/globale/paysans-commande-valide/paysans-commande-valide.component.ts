import { MonserviceService } from './../../services/monservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paysans-commande-valide',
  templateUrl: './paysans-commande-valide.component.html',
  styleUrls: ['./paysans-commande-valide.component.scss']
})
export class PaysansCommandeValideComponent implements OnInit {
  id:any;
  commandeValidePaysans:any
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.monservice.detailPaysansCommande(this.id).subscribe(data => {
      this.commandeValidePaysans=data
      console.log(this.commandeValidePaysans)
     });
  }

}
