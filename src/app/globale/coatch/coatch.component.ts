import { MonserviceService } from './../../services/monservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-coatch',
  templateUrl: './coatch.component.html',
  styleUrls: ['./coatch.component.scss']
})
export class CoatchComponent implements OnInit {
  coatch:any;
  ajout:any;
  fileName= 'ExcelSheet.xlsx';
  constructor(private monService:MonserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getCoatch();
  }
  getCoatch(){
    this.monService.AfficheCoatch().subscribe(data=>{
      console.log
      this.coatch=data
    })
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'coatch enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
  onSubmit(form:NgForm){
    
    this.monService.ajouteCoatch(form.value).subscribe((data)=>{
      console.log(data);

      if(data){
        this.presentToast();
        this.route.navigateByUrl("/globale/coatch")
        this.ngOnInit();
      }
    })
      
    }
    supprimer(id:any){
      this.monService.deleteCoatch(id).subscribe(() =>{
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
