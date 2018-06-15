import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ViewprofileService } from '../viewprofile.service';
import { viewprofile } from '../viewprofile/viewprofile';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  email_id:string;
  password:string;
  constructor(private _abc:ViewprofileService,private _route:Router,private act_route:ActivatedRoute) { }
  onOk(){
    this._abc.getlogById(this.email_id).subscribe(
     (data:viewprofile[])=>{
       console.log(data);
           this.email_id=data[0].email_id;
           this.password=data[0].password;
         }
       );
  }
  onCancel(){
    this._route.navigate(['']);
  }

  ngOnInit() {
    // // this.email_id=this.act_route.snapshot.params['email_id'];
    // this._abc.getlogById(this.email_id).subscribe(
    //   (data:viewprofile[])=>{
    //     console.log(data);
    //     this.email_id=data[0].email_id;
    //     this.password=data[0].password;
    //   }
    // );
  }

}
