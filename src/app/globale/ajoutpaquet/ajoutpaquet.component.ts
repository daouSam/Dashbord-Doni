import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/models/produit.model';
import { PaquetService } from 'src/app/services/paquet.service';
import { ProduitServiceService } from 'src/app/services/produit-service.service';
import Swal from 'sweetalert2';
import { Paquetproduit } from 'src/app/models/pproduit.model';
import { ImageResult, Options } from 'ngx-image2dataurl';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Paquet } from 'src/app/models/paquet';

@Component({
  selector: 'app-ajoutpaquet',
  templateUrl: './ajoutpaquet.component.html',
  styleUrls: ['./ajoutpaquet.component.scss']
})
export class AjoutpaquetComponent implements OnInit {
  produit : Produit[] = [];
  donnee!: Paquet
  lisTPpdrt: Paquetproduit[] = []
  public imgfile : any = File;
  imageSelected!: ImageResult
  paquetretour: any;
  pprdt!:Paquetproduit;
  imageSrc: string = '';
  paquet!:Paquet;
  image: any
  src: any = null;
  options: Options = {
    resize: {
      maxHeight: 128,
      maxWidth: 128
    },
    allowedExtensions: ['JPG', 'PnG']
  };
  url!: string;

  constructor(private produitService: ProduitServiceService,
              private paquetService: PaquetService) { }

  ngOnInit(): void {
    this.lisTPpdrt = this.pproduits
    this.produitService.AfficheProduit().subscribe(data=>{
      this.produit = data
      console.log(data)
    })

  }
  
  ajoutpaquet(donnee: NgForm){
    if (donnee.value.produit != '' && donnee.value.quantite != '') {
      console.log(donnee.value);
      const pprdt: Paquetproduit = {
        id: '',
        paquet: new Paquet,
        produit: new Produit,
        quantite: 0
      } 
      // this.pprdt = this.paquetService.pprodt;
      pprdt.paquet = donnee.value.paquet
      pprdt.produit = donnee.value.produit
      pprdt.quantite = donnee.value.quantite
      console.log(pprdt);
      
      this.paquetService.save(pprdt);
      this.lisTPpdrt = this.pproduits
    }
        
  }
  async validerPaquet(datad: NgForm){
    if(datad.value.nompaquet != '' && datad.value.prixpaquet != ''){
      const donnee: Paquet = {
        id: 0,
        nompaquet: '',
        descriptiont: '',
        prixpaquet: '',
        photo: '',
        paquetproduits: undefined
      } 
      donnee.nompaquet = datad.value.nompaquet
      donnee.descriptiont = datad.value.descriptiont
      donnee.prixpaquet = datad.value.prixpaquet
      if (this.imageSelected) {
        const imgsaved = this.saveImage(this.imageSelected)
        if (await imgsaved) {
        donnee.photo = this.url
        
        this.paquetService.ajoutPaquet(donnee).subscribe(result => {
            this.paquet = result
            for (let jki = 0; jki < this.lisTPpdrt.length; jki++ ) {
              this.lisTPpdrt[jki].paquet = result
            }        
            this.paquetService.ajouListPproduit(this.lisTPpdrt).subscribe(resultat => {
              console.log(resultat);
              datad.reset()         
              this.src = ''
              this.paquetService.vider();
              this.lisTPpdrt = this.pproduits
            })
          })
        }else{
          console.log('errr remplir champ vide');      
        }
      }
    }          
  }

  // chargephoto(files: any){
  //   this.imgfile = files
  //   console.log(this.imgfile)
  // }
  
  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.imgfile = event.target.files;
      console.log(this.imgfile[0]);      
      reader.readAsDataURL(file);    
      reader.onload = () => {   
        this.imageSrc = reader.result as string;
      };
   
    }
  }

  style(){
  }

  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'paquet enregistrer avec succès',
      showConfirmButton: false,
      timer: 3000
    })
  }

  get pproduits(): Array<Paquetproduit>{
    // this.paquetService.listeVentes = this.pa.ventes;
    return this.paquetService.pproduits;
  }
  
  get pproduit(): Paquetproduit{
    return this.paquetService.pproduit;
  }
  annuler(data: any){
    this.paquetService.delete(data);
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
      console.log('okll');
      
      console.log(imageData);
      
      const filePath = `donipaquetimg/${currentDate}.${imageData.file.name}`;
      const fileRef = ref(storage, filePath);
      const task = await uploadBytes(fileRef, blob);
      console.log('task: ', task);
      const url = getDownloadURL(fileRef);
      return url;
    } catch(e) {
      throw(e);
    }    
  }
  

}




