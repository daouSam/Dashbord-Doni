import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paquet } from 'src/app/models/paquet';
import { Paquetproduit } from 'src/app/models/pproduit.model';
import { PaquetService } from 'src/app/services/paquet.service';
import { ProduitServiceService } from 'src/app/services/produit-service.service';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listpaquet',
  templateUrl: './listpaquet.component.html',
  styleUrls: ['./listpaquet.component.scss']
})
export class ListpaquetComponent implements OnInit {

  paquets: any;
  divclass: string = 'col-sm-12'
  numclick: number = 1
  divtrue: boolean = false
  listPp: Paquetproduit[] = []
  detailclass = 'detailclass'
  produitpanier: any
  imgURL:any;
  img : any
  imgPaquet: string = "";
  nompaquet: any;
  prixpaquet: any;

  constructor(private router: Router, 
    private paquetService: PaquetService, 
    private produitService: ProduitServiceService) { }
  tdlst: any

  ngOnInit(): void {
    this.img =this.produitService.PhotoProduitById
    this.imgPaquet =this.paquetService.PhotoPaquet
    this.listpaquet();
    const divglobal = document.querySelector('.col-sm-12');
    this.tdlst = document.querySelector('.lstp');
    this.tdlst?.addEventListener('click', ()=> {
      divglobal?.classList.replace('col-sm-12','col-sm-6');   
    })
  }
  
  ajoutpage(){
    this.router.navigate(['/globale/paquetajout'])
  }

  listpaquet(){
    this.paquetService.listepaquets().subscribe(result =>{
      this.paquets = result        
    })
  }

  tdclick(dato){
    const element = document.getElementById('divclassid');
    const element2 = document.getElementById('divdetail');
    if (this.numclick > 0) {
      element?.classList.remove('col-sm-12');
      element?.classList.add('col-sm-6');
      element2?.classList.remove('detailclass');      
      element2?.classList.add('col-sm-6');
      this.numclick--     
    }else{
      element?.classList.add('col-sm-12');
      element?.classList.remove('col-sm-6');
      element2?.classList.add('detailclass');      
      element2?.classList.remove('col-sm-6');
      this.numclick++     
    }
    this.nompaquet = dato.nompaquet
    this.prixpaquet = dato.prixpaquet
    this.paquetService.listPproduitByPaquet(dato.id).subscribe(result =>{
      this.produitpanier = result
    })
  }

  supPaquet(paquet: Paquet){       
    this.paquetService.deletePaquet(paquet.id).subscribe(() =>{
      firebase.initializeApp(environment.firebase);
      const firebaseApp = initializeApp(environment.firebase);
      const storage = getStorage(firebaseApp);
      // Create a reference to the file to delete
      const desertRef = ref(storage, `${paquet.photo}`);
      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully     
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });  
      this.ngOnInit()    
    });
  }

}
