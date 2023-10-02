import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { EchangeService } from 'src/app/services/echange.service';
import { orderBy } from 'lodash';
import { NgForm } from '@angular/forms';
// import { OrderByPipe } from '../order-by.pipe';
// import * as _ from 'lodash'

@Component({
  selector: 'app-echabody',
  templateUrl: './echabody.component.html',
  styleUrls: ['./echabody.component.scss']
})

export class EchabodyComponent implements OnInit{
  @Input() DetailAll: any;
  AllEcha: any;
  reqres: boolean = false;
  @Output() ResMsg = new EventEmitter<any>();
  constructor(private echaServi: EchangeService) { }
  
  // transform(array: Array<any>, sortBy: string, order?: string): any[] {
  //   const sortOrder = order ? order : 'asc'; // setting default ascending order 
  //   return orderBy(array, [sortBy], [sortOrder]);
  // }
  
  ngOnInit(): void {
    //   this.listAllEcha();
    // this.orderByZ = this.orderBy.transform
  }
  sendMsgMy(data: NgForm){
    const datMsgEcha = {
      "contenu": data.value.contenu,
      "reqres": this.reqres
    }
    data.reset()
    this.sendValues(datMsgEcha);
    
    // data.reset()
  }
  
  sendValues(data){  
    this.ResMsg.emit(data);  
  }
  
}