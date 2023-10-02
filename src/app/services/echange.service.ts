import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl, PhotoProduitById } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EchangeService {

  private url = apiUrl;

  constructor(private http: HttpClient) { }


  listAllConverg(){
    return this.http.get(this.url+'messages/list');
  }
  
  addResMsgcl(idclt, MsgResAd){
    return this.http.put(this.url+"messagesres/"+idclt, MsgResAd)
  }
}
