import { ActivatedRoute } from '@angular/router';
import { MonserviceService } from './../../services/monservice.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { ProduitServiceService } from './../../services/produit-service.service';

@Component({
  selector: 'app-paysans',
  templateUrl: './paysans.component.html',
  styleUrls: ['./paysans.component.scss']
})
export class PaysansComponent implements OnInit {
  paysans:any;
  id :any;
  detailpay:any;
  fileName= 'ExcelSheet.xlsx';
  searchText: any
  listCoach: any;
  constructor(private monservice:MonserviceService,
    private route:ActivatedRoute,
    private service: ProduitServiceService) { }

  ngOnInit(): void {
    this. getPaysans();
    this.getallcoach();
  }

  cherche(dataco: NgForm){
    this.monservice.AffichePaysansCoachInterval(dataco.value.coach, dataco.value.dateD,dataco.value.dateF).subscribe((dato) =>{
      this.paysans = dato
      console.log(dato);    
    })
  }

  getallcoach(){
    this.monservice.AfficheCoatch().subscribe((datO) =>{
      this.listCoach = datO
      console.log(datO);      
    })
  }

  getPaysans(){
    this.monservice.AffichePaysans().subscribe(data=>{
      this.paysans=data      
    })
  }

  supprimer(id:any){
    this.monservice.deletePaysans(id).subscribe(() =>{
      alert("supprimer")
      this.ngOnInit()
    })
  }
  exportexcele(): void
  {
    /* pass here the table id */
    let element = document.getElementById('tablepaysans');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
  }
}
