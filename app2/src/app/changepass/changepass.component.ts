import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {EditprofileService } from '../editprofile.service';
import { editprofile } from '../editprofile/editprofile'
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
email_id:string;
password:string;
onSave(){
  this._abc.updatepro(new editprofile(this.email_id,this.password)).subscribe(
    (data:editprofile[])=>{
      console.log(data);

        }
      );
}
onCancel(){
  this._route.navigate(['']);
}
  constructor(private _abc:EditprofileService,private _route:Router,private act_route:ActivatedRoute) { }

  ngOnInit() {
  }

}
