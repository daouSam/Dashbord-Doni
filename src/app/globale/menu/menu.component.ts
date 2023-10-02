import { ProduitServiceService } from './../../services/produit-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Produit } from 'src/app/models/produit.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
categoriee:any;
imagePath: any;
  listCategorie :any;
  allprod: Produit[] = []
  fileName= 'ExcelSheet.xlsx';
  imgURL:any;
  ajout:any;
  public imgfile : any = File;
  constructor(private produitService:ProduitServiceService) { }

  ngOnInit(): void {
    this.getCategorie();
    this.AllCategorie();
    this.AllProduit()
  }
  getCategorie(){
    this.produitService.AfficheCategorie().subscribe(data=>{
      this.categoriee=data
    })
  }
  AllCategorie(){
    this.produitService.AfficheCategorie().subscribe((data)=>{
    this.listCategorie = data
    })
  }
  AllProduit(){
    this.produitService.AfficheProduit().subscribe((data)=>{
    this.allprod = data
    console.log(this.allprod);
    
    })
  }

  onSubmit(form: NgForm){
    this.produitService.ajouteCategorie(form.value).subscribe(
      result => {
        this.ajout = result
      }, 
      error => {
        this.presentToastdanger();
      },
      () => {
        this.presentToast();
      }
    )    
  }
  
  supprimer(id:any){
    this.produitService.deletecate(id).subscribe(() =>{
      alert("supprimer")
      this.ngOnInit()
    })
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'catégorie ajouter avec succès',
      showConfirmButton: false,
      timer: 3000
    })
    this.ngOnInit();
  }
  presentToastdanger(){
    Swal.fire({
      icon: 'error',
      title: 'erreur...',
      text: "erreur d'ajout ou cette catégorie existe déjà dans la base de donnée",
      timer: 3000
    })
    this.ngOnInit();
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