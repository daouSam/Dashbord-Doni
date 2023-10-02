import { CampagneService } from './../../services/campagne.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.scss']
})
export class CampagneComponent implements OnInit {
  campagne:any;
  constructor(private campagneservice:CampagneService) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(){
    this.campagneservice.AfficheCampagne().subscribe(data=>{
      console.log
      this.campagne=data
    })
  }
  supprimer(id:any){
    this.campagneservice.deleteProduit(id).subscribe(() =>{
      alert("supprimer")
      this.ngOnInit()
    })
  }

}
