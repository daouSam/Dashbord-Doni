import { ProduitServiceService } from './../../services/produit-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Options, ImageResult } from "ngx-image2dataurl";
import * as firebase from 'firebase/app';
import 'firebase/storage'; 
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-modifi-produit',
  templateUrl: './modifi-produit.component.html',
  styleUrls: ['./modifi-produit.component.scss']
})
export class ModifiProduitComponent implements OnInit {
  modifiProduit: any;
  photo: File | any;
  id:any;
  listCategorie:any;
  imgURL:any;
  public imgfile : any = File;
  cproduit: boolean = false;
  catcat: string = '';
  imageSelected!: ImageResult;
  src!: any;
  options: Options = {
    resize: {
      maxHeight: 128,
      maxWidth: 128
    },
    allowedExtensions: ['JPG', 'PnG']
  };
  image: any;
  url!: string;

  constructor(private produitService:ProduitServiceService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produitService.detailProduit(this.id).subscribe(data =>{
      this.modifiProduit = data;
      this.catcat = this.modifiProduit.categorie.type;
      if(this.modifiProduit.cproduit){
        this.cproduit = true
      }                       
    })
    this.AllCategorie();
  }
  AllCategorie(){
    this.produitService.AfficheCategorie().subscribe((data)=>{
    this.listCategorie = data
    })
  }
  
  onUpdate(){    
    this.produitService.UpdateProduit(this.modifiProduit.id, this.modifiProduit).subscribe(
      ()=>{        
        this.presentToast();
        this.produitService.modifieCaract(this.modifiProduit.cproduit).subscribe(() =>{
          this.presentToast();
        // this.router.navigateByUrl("/listeProduit")
        this.ngOnInit(); 
      })       
    })
  }
  
  async udateImg(){
    firebase.initializeApp(environment.firebase);
    const firebaseApp = initializeApp(environment.firebase);
    const storage = getStorage(firebaseApp);
    // Create a reference to the file to delete
    const desertRef = ref(storage, `${this.modifiProduit.photo}`);
    // Delete the file
    deleteObject(desertRef).then(() => {
      // File deleted successfully
      this.presentToastImagedanger();      
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
    if (this.imageSelected) {
      const imgsaved = this.saveImage(this.imageSelected)
      if (await imgsaved) {
      this.modifiProduit.photo = this.url
      console.log(this.modifiProduit.photo);        
      this.produitService.UpdateProduit(this.modifiProduit.id, this.modifiProduit).subscribe((data) => {
        console.log(data);          
          this.presentToastImage();
          this.src = ''      
      })        
    }
  }

    // if (await imsaved) {
    //   if (this.url){
    //     this.modifiProduit.photo = this.url,
    //     this.produitService.UpdateProduit(`${this.modifiProduit.id}`, `${this.modifiProduit}`).subscribe(() =>{
    //       this.presentToastImage();      
    //     })
    //   }
      
    // }

  }

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

  ajoutCaracteristique(form: NgForm){
    this.produitService.ajouCaract(form.value).subscribe((data) =>{
      this.modifiProduit.cproduit = data
      this.produitService.UpdateProduit(this.modifiProduit.id, this.modifiProduit).subscribe((dataretour) =>{
          form.reset();
          this.presentToast();
          // this.router.navigateByUrl("/listeProduit")
          this.ngOnInit();       
      })

         
    })
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Produit modifier avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
  presentToastImage(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Image modifier avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
  presentToastImagedanger(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Image supprimer avec succès',
      showConfirmButton: false,
      timer: 2000
    })
  }

  
 
}

