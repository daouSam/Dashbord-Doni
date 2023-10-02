import { Component, OnInit } from '@angular/core';
import { CommandeServiceService } from 'src/app/services/commande-service.service';

@Component({
  selector: 'app-commdpvalide',
  templateUrl: './commdpvalide.component.html',
  styleUrls: ['./commdpvalide.component.scss']
})
export class CommdpvalideComponent implements OnInit {

  commandeValider: any
  constructor(private commandserv: CommandeServiceService) { }

  ngOnInit(): void {
    this.commandserv.cmmdValider().subscribe((data) =>{
      this.commandeValider = data    
    })
  }

}
