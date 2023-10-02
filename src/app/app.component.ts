import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashbord';
  loginStatus:boolean = false;
  constructor() { }

  ngOnInit(): void {
   
    if(localStorage["loginStatus"]){
      this.loginStatus=JSON.parse(localStorage["loginStatus"]);
    }
   
  }
  logOut(){
   
    localStorage.removeItem('loginStatus')
    location.replace("/login");


}
}
