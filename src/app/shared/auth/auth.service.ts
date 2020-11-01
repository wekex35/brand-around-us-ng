import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token;

  constructor( private router: Router) {}

  // signupUser(email: string, password: string) {
  //   //your code for signing up the new user
  // }

  signinUser(resToken: string) {
    sessionStorage.setItem('access_token',resToken);
    this.token = resToken;
    this.router.navigate(['/dashboards']);
    
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {   
    this.token = null;
    sessionStorage.removeItem('access_token');
    this.isAuthenticated();
  }

  getToken() {  
    this.token = sessionStorage.getItem('access_token');  
    return this.token ;
  }

  isAuthenticated() {
    // this.token = sessionStorage.getItem('access_token');   
    
    // if (this.token != null) {
    //   if(this.token.length > 10)
    //     return true;
    //     this.router.navigate(['/login']);
    //   return false;
    // }else{
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
    // here you can check if user is authenticated or not through his token 
   
  }
}
