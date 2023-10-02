import { Component, OnInit, inject } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes} from '@angular/fire/storage';
import { ProduitServiceService } from './../../services/produit-service.service';
import { Options, ImageResult } from "ngx-image2dataurl";

import 'firebase/storage';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss'],
  providers: [MessageService],
})
export class AjoutProduitComponent implements OnInit {
  imagePath: any;
  image: any
  imageSelected!: ImageResult
  listCategorie :any;
  imgURL:any;
  public imgfile : any = File;
  dataProduit: any;
  dataretour!: Produit
  src: any = null;
  options: Options = {
    resize: {
      maxHeight: 128,
      maxWidth: 128
    },
    allowedExtensions: ['JPG', 'PnG']
  };
  url!: string;
  

  constructor(
    private produitService:ProduitServiceService,
    private messageService: MessageService,
    private route:Router,
    private storage: Storage
    ) {}

  ngOnInit(): void {
    this.AllCategorie();
  }
  
  AllCategorie(){
    this.produitService.AfficheCategorie().subscribe((data)=>{
    this.listCategorie = data
    })
  }

  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Produit enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }


  // chargephoto1(fi){
  //   this.imgfile = fi
  //   let file1 = this.imgfile[0] 
  //   console.log(file1);
  // }

  // async chargephoto(files: any){
  //   this.imgfile = files
  //   let file1 = this.imgfile[0] 
  //   firebase.initializeApp(environment.firebase);
  //   const firebaseApp = initializeApp(environment.firebase);
  //   const storage = getStorage(firebaseApp);

  //   if(file1){
  //     //code call function 
  //     // const url = await this.uploadImage(blob, file1);  
  //     // console.log(response);
  //   }
    
  // }

  async selected(imageResult: ImageResult) {
    if (imageResult.error) alert(imageResult.error);
    this.imageSelected = imageResult
    this.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;      
  } 
  async saveImage(imageResult: ImageResult): Promise<boolean>{
    if (imageResult) {
      this.image = imageResult.dataURL;
      const blob = this.dataURLtoBlob(imageResult.dataURL);
      this.url = await this.uploadImage(blob, imageResult); 
      if (await this.url) return true; else return false
    }
    return false
  }

  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  async uploadImage(blob: any, imageData: any) {
    try {
      firebase.initializeApp(environment.firebase);
      const firebaseApp = initializeApp(environment.firebase);
      const storage = getStorage(firebaseApp);
      const currentDate = Date.now();
      console.log('okll');
      
      console.log(imageData);
      
      const filePath = `doniprodimg/${currentDate}.${imageData.file.name}`;
      const fileRef = ref(storage, filePath);
      const task = await uploadBytes(fileRef, blob);
      console.log('task: ', task);
      const url = getDownloadURL(fileRef);
      return url;
    } catch(e) {
      throw(e);
    }    
  }




  async onSubmit(form: NgForm){
    console.log(form.value);
    const dataretour: Produit = {}    
    dataretour.nomProduit = form.value['nomProduit']
    dataretour.description = form.value['description']
    dataretour.prixKg = form.value['prixKg']
    dataretour.quantite = form.value['quantite']
    dataretour.uniteProd = form.value['uniteProd']
    console.log(dataretour);
    dataretour.categorie = form.value['categorie']
    if (this.imageSelected && form.value['nomProduit'] !== ' ' && form.value['prixKg']!== ' ') {
        const imgsaved = this.saveImage(this.imageSelected)
        if (await imgsaved) {
        dataretour.photo = this.url
        console.log(dataretour);        
        this.produitService.ajoutProduitNoImg(dataretour).subscribe((data) => {
          console.log(data);          
            this.presentToast();
            this.src = ''
            form.reset()       
        })        
      }
    }
  
  }
  retourp(booltype: string){
    switch (booltype) {
      case 'Pisciculture':
        this.route.navigate(['/globale/piscicult/liste']);      
        break;
      case 'Energie':
        this.route.navigate(['/globale/energie/liste']);        
        break;
      case 'Maraîchage':
        this.route.navigate(['/globale/listeProduit']);      
        break;
      case 'Cérealière':
        this.route.navigate(['/globale/listCereale']);      
        break;
      case 'Engrais':
        this.route.navigate(['/globale/listAngrais']);      
        break;
      default:
        this.route.navigate(['/globale/listeProduit']);
      break;
    }
  }
  
}
