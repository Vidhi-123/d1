import { Routes,RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ViewprofileComponent } from "./viewprofile/viewprofile.component";
import { EditprofileComponent } from "./editprofile/editprofile.component";
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ChangepassComponent } from "./changepass/changepass.component";

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewprofile/:email_id',component:ViewprofileComponent},
  {path:'editprofile/:email_id',component:EditprofileComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'changepass',component:ChangepassComponent}
];
export const routing=RouterModule.forRoot(arr)
