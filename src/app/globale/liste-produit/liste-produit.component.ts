import { ProduitServiceService } from './../../services/produit-service.service';
import { Component, OnInit, Pipe } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { environment } from 'src/environments/environment';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss'],
  providers: [ConfirmationService,MessageService],
  styles: [`
        .outofstock {
            font-weight: 700;
            color: #FF5252;
            text-decoration: line-through;
        }

        .lowstock {
            font-weight: 700;
            color: #FFA726;
        }

        .instock {
            font-weight: 700;
            color: #66BB6A;
        }

        :host ::ng-deep .row-accessories {
            background-color: rgba(0,0,0,.15) !important;
        }
    `
    ]

  
 
})
export class ListeProduitComponent implements OnInit {
  produit:any;
  searchText:any;
  fileName = "  produit.xlsx";
  uploadedFiles: any[] = [];
  produitAjout:any;
  photo: any;
  imagePath: any;
  listCategorie :any;
  imgURL:any;
  img : any
  public imgfile : any = File;
  p: number = 1;
  target:any;
  type: string = '';
  constructor(private produitService:ProduitServiceService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.AllCategorie();
    this.getProduit();
    this.img =this.produitService.PhotoProduitById
  }
  getProduit(){
    this.type = this.route.snapshot.params['type'];
    this.produitService.AfficheProduitCategrie(this.type).subscribe(data=>{
      this.produit=data
      console.log(this.produit)
    })
  }

 
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'produit Supprimer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }

  supprimer(produit: Produit){
    if(confirm('êtes vous sûr de supprimer ?'))
    this.produitService.deleteProduit(produit.id).subscribe(() =>{
      firebase.initializeApp(environment.firebase);
      const firebaseApp = initializeApp(environment.firebase);
      const storage = getStorage(firebaseApp);
      // Create a reference to the file to delete
      const desertRef = ref(storage, `${this.produit.photo}`);
      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully     
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });    
      this.presentToast()
      this.ngOnInit()       
    })
   
  }

  AllCategorie(){
    this.produitService.AfficheCategorie().subscribe((data)=>{
    this.listCategorie = data
    })
  }
 
}
