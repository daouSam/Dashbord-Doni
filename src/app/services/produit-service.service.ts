import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { apiUrl, PhotoProduitById } from 'src/environments/environment.prod';
import { Produit } from './../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  private apiUrl = apiUrl
  public PhotoProduitById = PhotoProduitById


  constructor(
    private http: HttpClient) { }


  AfficheCategorie(){
    return this.http.get(this.apiUrl+"AllCategorie")
  }
  AfficheProduit(){
    return this.http.get<Produit[]>(this.apiUrl+"AllPraduit")
  }
  AfficheProduitCategrie(data: string){
    return this.http.get(this.apiUrl+"AllProduitByCategorie/"+data)
  }
  AfficheProduitAchte(){
    return this.http.get(this.apiUrl+"AllProduitAchete")
  }

  deleteProduit(id:any){
    return this.http.delete(this.apiUrl+"DeleteProduit/"+id)
  }
  deletecate(id:any){
    return this.http.delete(this.apiUrl+"DeleteCategorie/"+id)
  }

  detailProduit(id:any): Observable<Produit>{
    return this.http.get<Produit>(this.apiUrl+"ProduitById/"+id)
  }
  
  
  ajouteCategorie(data: any){
    return this.http.post(this.apiUrl+"AddCategorie", data)
  }
  ajout(data: any){
    return this.http.post(this.apiUrl+"addProduit", data)
  }
  ajoutProduit(data:any, photo: File): Observable<any>{
    const formData: FormData = new FormData()
    formData.append("file", photo)
    return this.http.post(this.apiUrl+"addProduit",formData)
  }
  ajoutProduitNoImg(data:any): Observable<any>{
    return this.http.post(this.apiUrl+"addProduitNoImg",data)
  }
  
  UpdateProduit(id: any,data:any){
    return this.http.put(this.apiUrl +"UpdateProduit/"+id,data)
  }

  ajouterImage(data:any, photo:File):Observable <any>{
    const forms: FormData = new FormData()
    forms.append("image", photo)
    return this.http.put(this.apiUrl+"ajoutProduitimg/"+data, forms)
  }
  
  modifi(data:any ,id:any){
    return  this.http.put(this.apiUrl+"UpdateProduit/"+id,data)
  }

  ajouCaract(data: any){
    return this.http.post(this.apiUrl+"caract/ajout", data)    
  }

  listeCaract(){    
    return this.http.get<Produit>(this.apiUrl+"caract/liste")
  }

  caractById(id: any){
    return this.http.get<Produit>(this.apiUrl+"caract/"+id)
    
  }
  modifieCaract(data: any){
    return this.http.put(this.apiUrl+"caract/modifie",data)

  }
}
