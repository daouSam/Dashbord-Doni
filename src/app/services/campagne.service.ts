import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl} from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CampagneService {
  private apiUrl = apiUrl;
  
  constructor(private http: HttpClient) { }

  AfficheCampagne(){
    return this.http.get(this.apiUrl+"AllCampagne")
  }
  
  deleteProduit(id:any){
    return this.http.delete(this.apiUrl+"DeleteCampagne/"+id);
  }
}
