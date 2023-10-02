import { MonserviceService } from './../../services/monservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coatch-detail',
  templateUrl: './coatch-detail.component.html',
  styleUrls: ['./coatch-detail.component.scss']
})
export class CoatchDetailComponent implements OnInit {
  id:any;
  detailcoatch:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.monservice.detailCoatch(this.id).subscribe(data => {
      this.detailcoatch=data
     });
  }

}
