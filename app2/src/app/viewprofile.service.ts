import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {
  private url:string="http://localhost:3000/viewprofile/"

  constructor(private _http:HttpClient) { }
  getlogById(email_id:string){
    return this._http.get(this.url+email_id)
  }

}
