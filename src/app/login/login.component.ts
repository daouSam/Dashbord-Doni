import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MonserviceService } from '../services/monservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  donnee : any

  constructor(private service : MonserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  presentToast(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Login ou mot de passe incorrect',
      showConfirmButton: false,
      timer: 3000
    })
  }
  connexion(form: NgForm){
    this.service.loginAdmin(form.value["username"],form.value["password"]).subscribe((data)=>{
   console.log(data);
   if(data){
   this.donnee=data
   if(this.donnee.profile=="ADMINI"){
    console.log("bien");
    //  let loginStatus = true
    localStorage.setItem('isLogin', JSON.stringify(this.donnee)); 
     this.router.navigate(["/globale/accueil"])
   }else{
    console.log("faut");
    this.presentToast();
   }
  }else{
    this.presentToast();
  }
  })
}
}
