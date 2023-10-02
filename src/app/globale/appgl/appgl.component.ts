import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appgl',
  templateUrl: './appgl.component.html',
  styleUrls: ['./appgl.component.scss']
})
export class AppglComponent implements OnInit {

  title = 'dashbord';
  loginStatus:boolean = false;
  constructor() { }

  ngOnInit(): void {
   
    if(localStorage["loginStatus"]){
      this.loginStatus=JSON.parse(localStorage["loginStatus"]);
    }
   
  }
  logOut(){
   
    localStorage.removeItem('isLogin')
    location.replace("/login");
  }
  
}
