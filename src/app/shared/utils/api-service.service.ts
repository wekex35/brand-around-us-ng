import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  constructor(private authService : AuthService, private http: HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });


  authHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //  'Authorization' :  this.authService.getToken(),
    'Authorization' : this.authService.getToken()??"",

  });


  // baseUri = 'http://127.0.0.1:90/'
  baseUri = 'http://flutteruix.com/'
  apiRoot = this.baseUri+'api/'

  postRequest(path: string,value: any) {
    // this.checkAuth();     
     return this.http.post<any>(this.apiRoot+path, value, { headers: this.authHeaders });    
  
  }

  getRequest(path: string) {  // 
    // this.checkAuth()                                                        
      return this.http.get<any>(this.apiRoot+path,{ headers: this.authHeaders });
  }

  getRequestExternal(path: any) {
    return this.http.get<any>(path);
 
  }

  getRequestAuth(path: string) {  
    // console.log('hello');
    // console.log(this.authHeaders);
    // this.checkAuth()    
    // this.authHeaders['Authorization']  =  this.authService.getToken();  
    // console.log(this.authHeaders);
                                                    
      return this.http.get<any>(this.apiRoot+path, { headers: this.authHeaders });
  }

}
