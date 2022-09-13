import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL:String = 'https://shy-teal-snapper-wear.cyclic.app/api'

  constructor(private http: HttpClient) { }

  Signup(body:any){
    return this.http.post<any>(this.URL + '/signup', body);
  }

  Signin(body:any){
    return this.http.post<any>(this.URL + '/signin', body);
  }

  tokenVerify(body:any){
    return this.http.post<any>(this.URL + '/tokenVerify', body);
  }
}
