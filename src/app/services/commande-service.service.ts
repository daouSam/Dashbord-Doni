import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl, PhotoProduitById } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {
  
  private apiUrl = apiUrl;
  public PhotoProduitById = PhotoProduitById;

  constructor(private http: HttpClient) { }
  AfficheCommande(){
    return this.http.get(this.apiUrl+"AllCommande")
  }
  CommandeByValider(valider:any, id :any){
    return this.http.get(this.apiUrl+"CommandeByValider/"+valider+"/"+id);
  }


  CommandeById(id:any){
    return this.http.get(this.apiUrl +"CommandeById/"+ id);
  }
  updateEtatCommande(id: number, data: any){
    return this.http.put(this.apiUrl+"UpdateEtat/"+id,data);
  }
  annulerEtatCommande(id: number, data: any){
    return this.http.put(this.apiUrl+"UpdateEtatByAnuller/"+id,data);
  }
//   panierById(id: number){
//     return this.http.get(this.apiUrl+"UpdateEtatByAnuller/"+id);
//   }
  /***
   * commande paquet partie
   */

  cmmdPEncours(){
    return this.http.get(this.apiUrl+'commandep/list')
  }

  cmmdValiderByuser(id){
    return this.http.get(this.apiUrl+'commandep/listok/'+id)
  }

  cmmdEnCoursByuser(id){
    return this.http.get(this.apiUrl+'commandep/listnok/'+id)
  }

  cmmdValider(){
    return this.http.get(this.apiUrl+'commandep/listok')
  }

  cmmdEnCours(){
    return this.http.get(this.apiUrl+'commandep/listnok')
  }
  cmmdEnValide(id){
    return this.http.put(this.apiUrl+'commandep/modifie/'+id,'')
  }
}
