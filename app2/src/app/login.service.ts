import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { login } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string="http://localhost:3000/user/"

  constructor(private _http:HttpClient) { }
  getUser()
  {
    return this._http.get(this.url);
  }
  getLoginById(item:login){
    let body=JSON.stringify(item)   ;
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  updatepro(item:login){
    let body=JSON.stringify(item);
    let _abc=new HttpHeaders().set('Content-Type','application/json');
 return this._http.put(this.url+item.email_id,body,{headers:_abc});
  }
}


