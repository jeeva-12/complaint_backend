import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-resgiration',
  templateUrl: './user-resgiration.component.html',
  styleUrls: ['./user-resgiration.component.css']
})
export class UserResgirationComponent {

  constructor(private api:ApiService, private route:Router){}
 name=""
 address=""
 mobile=""
 email=""
 username=""
 password=""

 readvalues=()=>{
  let data={
    "name":this.name,
    "address":this.address,
    "mobile":this.mobile,
    "email":this.email,
    "username":this.username,
    "password":this.password
  }
  this.api.userRsg(data).subscribe(
    (response:any)=>{
      if(response.status =="success")
      {
        console.log(response)
        alert("User Registration Successful")
        this.route.navigate(["/userlogin"])
      }else{
        alert("User Registration failed")
      }
    }
  )
 }
}
