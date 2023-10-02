import { MonserviceService } from './../../services/monservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-paysans',
  templateUrl: './detail-paysans.component.html',
  styleUrls: ['./detail-paysans.component.scss']
})
export class DetailPaysansComponent implements OnInit {
  detailpay:any;
  id:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    
    this.id = this.route.snapshot.params['id'];
    this.monservice.detailPaysans(this.id).subscribe(data => {
      this.detailpay=data
      // console.log(this.detailpay);
      
     });
  }

}
