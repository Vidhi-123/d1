import { Component, OnInit } from '@angular/core';
import { editprofile } from '../editprofile/editprofile';
import { Router, ActivatedRoute } from '@angular/router';
import { EditprofileService } from '../editprofile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
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
  arr:editprofile[]=[

  ];



  constructor(private _abc:EditprofileService,private _route:Router,private act_route:ActivatedRoute) { }
  onSave(){
    this._abc.updateprofile(new editprofile(this.email_id,this.password,this.u_name,this.mob_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/viewprofile',this.email_id])
      }
    );
  }

  ngOnInit() {
    this.id=this.act_route.snapshot.params['email_id'];
    this._abc.getloById(this.id).subscribe(
      (data:editprofile[])=>{
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
