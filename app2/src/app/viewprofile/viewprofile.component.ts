import { Component, OnInit } from '@angular/core';
import { viewprofile } from './viewprofile';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewprofileService } from '../viewprofile.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  id:string;
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
  arr:viewprofile[]=[

  ]

  constructor(private _abc:ViewprofileService,private _route:Router,private act_route:ActivatedRoute) { }
  onEdit(){

      this._route.navigate(['/editprofile',this.email_id]);


  }

  ngOnInit() {
    this.id=this.act_route.snapshot.params['email_id'];
    this._abc.getlogById(this.id).subscribe(
      (data:viewprofile[])=>{
        console.log(data);
        this.email_id=data[0].email_id;
        this.password=data[0].password;
        this.u_name=data[0].u_name;
        this.mob_no=data[0].mob_no;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;
      }
    );


  }

}
