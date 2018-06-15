import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arr:login[]=[

  ];
  email_id:string;
  password:string;
  u_name:string;
  city:string;
  mob_no:string;
  gender:string;
  address:string;
  onLogin(){

     console.log(this.email_id);
   console.log(this.password);
    this._xyz.getLoginById(new login(this.email_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);

        if(data.length>0){

        alert("login successfully");

         this._route.navigate(['/viewprofile',this.email_id]);
        }
        else{
          alert("unsuccesful")
        }
      }
    );
  }
  onSignup(){
    this._route.navigate(['/signup']);

  }
  onPass(){
    this._route.navigate(['/forgotpass']);
  }
onChange(){
  this._route.navigate(['/changepass']);
}
  constructor(private _xyz:LoginService,private _route:Router) { }

  ngOnInit() {
  }

}
