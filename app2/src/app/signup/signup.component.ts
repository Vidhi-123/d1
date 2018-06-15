import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { signup } from './signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email_id:string;
  password:string;
  u_name:string;
  mob_no:string
  city:string='abad';
  gender:string='male';
  address:string;
  arr1:string[]=[
    'abad',
    'baroda',
    'surat'
  ];
  arr:signup[]=[];
  onAdd(){


  this._xyz.addUser(new signup(this.email_id,this.password,this.u_name,this.mob_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{
      console.log(data)
      this.arr.push(new signup(this.email_id,this.password,this.u_name,this.mob_no,this.city,this.gender,this.address));
      this._route.navigate(['']);
    }
  );





  }
  onLogin(){
    this._route.navigate([''])

  }

  constructor(private _xyz:SignupService,private _route:Router) { }

  ngOnInit() {
  }

}
