import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardienGuard implements CanActivate {
  constructor(
    private router : Router
    
  ){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  //     if(this.isLog()){
  //       return true
  //     }
  //     return this.router.navigate(['login']);
  // }
  // isLog(): boolean{
  //   let users = localStorage.getItem('isLogin')
  //   if(users !=null ){
  //     return true
  //   }else {
  //     return false
  //   }
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.isLogged()){
        return true;
      }
      console.log('ok retour');
      
    return this.router.navigate(['/login'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('isLogin')
    return !! token;
  }
}
