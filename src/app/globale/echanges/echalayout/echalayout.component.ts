import { Component, OnInit} from '@angular/core';
import { EchangeService } from 'src/app/services/echange.service';
import { orderBy } from 'lodash';

// @Pipe({
//   name: 'orderBy'
// })
@Component({
  selector: 'app-echalayout',
  templateUrl: './echalayout.component.html',
  styleUrls: ['./echalayout.component.scss']
})
export class EchalayoutComponent implements OnInit{
  AllEcha: any;
  currMsgDis: any;
  currOutListSort: any;
  cltId: number = 0;
  EchaRes: any;
  constructor(private echaServi: EchangeService) { }

  // transform(array: Array<any>, sortBy: string, order?: string): any[] {
  //   const sortOrder = order ? order : 'asc'; // setting default ascending order 
  //    return orderBy(array, [sortBy], [sortOrder]);
  // }

  ngOnInit(): void {
    this.listAllEcha()
  }

  listAllEcha(){
    this.echaServi.listAllConverg().subscribe(result => {
      this.AllEcha = result
      this.currMsgDis = this.AllEcha[0].echamsg; 
      // this.currMsgDis = this.currOutListSort.sort((a, b) => b.id - a.id); 
      this.currMsgDis.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
      // descending
      // console.log(this.currMsgDis.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)));
      
      // this.currMsgDis = this.currMsgDis.sort((a, b) => b.id - a.id);

      //ascending
      // this.currMsgDis = this.currMsgDis.sort((a, b) => a.id - b.id);
      this.cltId = this.AllEcha[0].paysans.id        
    })
  }

  GetChildData(data){  
    this.currMsgDis = data.echamsg  
    this.cltId = data.paysans.id
    console.log(this.currMsgDis);
    console.log(this.cltId);
 }
 GetChildDataResMsg(data){  
    this.echaServi.addResMsgcl(this.cltId, data).subscribe(result =>{
      this.EchaRes = result
      this.currMsgDis = this.EchaRes.echamsg
      this.currMsgDis.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    })
 }

}
