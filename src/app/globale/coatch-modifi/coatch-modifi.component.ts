import { MonserviceService } from './../../services/monservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coatch-modifi',
  templateUrl: './coatch-modifi.component.html',
  styleUrls: ['./coatch-modifi.component.scss']
})
export class CoatchModifiComponent implements OnInit {
  modifiCoatch:any;
  id:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void { this.id = this.route.snapshot.params['id'];
  this.monservice.detailCoatch(this.id).subscribe(data => {
    this.modifiCoatch=data
   });
  }
  onUpdate(){
    
    this.monservice.UpdateCoatch(this.modifiCoatch.id, this.modifiCoatch).subscribe(
      dataretour=>{
        console.log(dataretour);       
       
    }
  
 ) }
}
