import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl, PhotoProduitById, ImgPaquet } from 'src/environments/environment.prod';
import { Paquetproduit } from 'src/app/models/pproduit.model';
import { Observable } from 'rxjs';
import { Paquet } from '../models/paquet';

@Injectable({
  providedIn: 'root'
})
export class PaquetService {
  private apiUrl = apiUrl;
  public PhotoProduitById = PhotoProduitById;
  public PhotoPaquet = ImgPaquet;
  public pprodt = new Paquetproduit();
  private _pproduit: Paquetproduit = new Paquetproduit();
  private _pproduits: Array<Paquetproduit> = [];

  constructor(private http: HttpClient) { }

  ajoutPaquet(data: any){
    return this.http.post<Paquet>(this.apiUrl+"paquet/ajout", data);
  }
   
  miseajourpaquet(idp: any, data: any){
    return this.http.put(this.apiUrl+"paquet/ajourproduit/"+idp, data);
  }
  
  listepaquets(){
    return this.http.get(this.apiUrl+"paquet/list");
  }

  ajouPproduit(data){
    return this.http.post(this.apiUrl+'pproduit/ajout', data)
  }

  ajouListPproduit(data){ 
    return this.http.post<Array<Paquetproduit>>(this.apiUrl+'pproduit/list/ajout', data)
  }

  listPproduitByPaquet(idp){
    return this.http.get(this.apiUrl+'pproduit/list/paquetId/'+idp)
  }

  listPproduitAll(){
    return this.http.get(this.apiUrl+'pproduit/list')
  }

  deletePaquet(id: any){
    return this.http.delete("http://localhost:8081/api/paquet/delete/"+id)
  }

  ajoutPaquetImg(idp: any, photo: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append("image", photo);
    return this.http.put(this.apiUrl+"ajoutPaquetimg/"+idp, formData);
  }

  public save(data: Paquetproduit){
    this.pproduits.push(this.cloneVente(data));
  }
  public delete(index: any){
    this.pproduits.splice(index, 1);
  }

  public vider(){
    this.pproduits = [];
  }

  private cloneVente(pproduit: Paquetproduit): Paquetproduit {
    const myClone = new Paquetproduit();
    myClone.paquet = pproduit.paquet;
    myClone.produit = pproduit.produit;
    myClone.quantite = pproduit.quantite;
    return myClone;
  }
  get vente(): Paquetproduit{
    if(this._pproduit == null){
      this._pproduit = new Paquetproduit();
    }
    return this.pproduit;
  }

  set pproduit(value: Paquetproduit){
    this._pproduit = value;
  }

  get pproduits(): Array<Paquetproduit>{
    if(this._pproduits == null){
      this._pproduits = new Array<Paquetproduit>();
    }
    return this._pproduits
  }

  set pproduits(value: Array<Paquetproduit>){
    this._pproduits = value;
  }

  
}
