import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { apiUrl, PhotoProduitById } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MonserviceService {
  
  private apiUrl = apiUrl;
  public PhotoProduitById = PhotoProduitById;

  constructor(private http: HttpClient) { }


  AffichePaysans(){
    return this.http.get(this.apiUrl+"AllPaysans")
  }
  AffichePaysansCoachInterval(udi:any,dd: any, df: any){
    return this.http.get(this.apiUrl+"PaysansDateInterCoach/"+udi+"/"+dd+"/"+df);
  }
  AfficheAchete(){
    return this.http.get(this.apiUrl+"AllCommande")
  }

  AfficheCoatch(){
    return this.http.get(this.apiUrl+"AllCoach")
  }
  AfficheCommandeCour(etat: any){
    return this.http.get(this.apiUrl+"CommandeByEtat/"+ etat);
  }

  commandeparpanier(idp: any){
    return this.http.get(this.apiUrl+"produitpanier/panier="+idp);
  }
  
  CommandeById(id:any){
    return this.http.get(this.apiUrl +"CommandeById/"+ id);
  }
  ajouteCoatch(data: any){
    return this.http.post(this.apiUrl+"AddCoach",data);
  }
  deletePaysans(id:any){
    return this.http.delete(this.apiUrl+"DeletePaysans/"+id);
  }
  deleteCoatch(id:any){
    return this.http.delete(this.apiUrl+"DeleteCoach/"+id);
  }
  UpdateCoatch(id :number,data:any){
    return this.http.put(this.apiUrl +"UpdateCoach/"+id,data);
  }
  UpdateEtat(id :number,data:any){
    return this.http.put(this.apiUrl +"UpdateEtatBycours/"+id,data);
  }
  UpdateMontant(id :number,data:any){
    return this.http.put(this.apiUrl +"UpdateCommande/"+id,data);
  }

  detailPaysans(id:any){
    return this.http.get(this.apiUrl+"PaysansById/"+id);
  }
  detailCoatch(id:any){
    return this.http.get(this.apiUrl+"CoachById/"+id);
  }
  detailPaysansCommande(id:any){
    return this.http.get(this.apiUrl+"CommandeByPaysans/"+id);
  }
  loginAdmin(login :String,password : String){
    return this.http.get(this.apiUrl+"loginCoach/"+login+"&"+password)
  }
}
