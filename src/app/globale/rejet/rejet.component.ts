import { MonserviceService } from '../../services/monservice.service';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rejet',
  templateUrl: './rejet.component.html',
  styleUrls: ['./rejet.component.scss']
})
export class RejetComponent implements OnInit {
  commandeAcheter:any;
  etat="Acheter"
  exportColumns: any[] | undefined;
  fileName= 'ExcelSheet.xlsx';
  constructor(private monService:MonserviceService) { }

  ngOnInit(): void {
    this.getCommandeAcheter();
  }
  getCommandeAcheter(){
    this.monService.AfficheCommandeCour(this.etat).subscribe(data=>{
      this.commandeAcheter=data
    })
  }

  exportexcele(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
    this.presentToast();
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Liste Exporter avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
