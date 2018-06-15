import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { editprofile } from './editprofile/editprofile';
@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
  private url:string="http://localhost:3000/editprofile/"

  constructor(private _http:HttpClient) { }
  getloById(email_id:string){
    return this._http.get(this.url+email_id)
  }
  updateprofile(item:editprofile){
    let body=JSON.stringify(item);
    let _abc=new HttpHeaders().set('Content-Type','application/json');
 return this._http.put(this.url+item.email_id,body,{headers:_abc});
  }

  updatepro(item:editprofile){
    let body=JSON.stringify(item);
    let _abc=new HttpHeaders().set('Content-Type','application/json');
 return this._http.put(this.url,body,{headers:_abc});
  }
}
