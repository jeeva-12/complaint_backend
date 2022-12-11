import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userlogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/userLogin",data)
  }

  userRsg=(data:any)=>
  {
    return this.http.post("http://localhost:8080/userReg",data)
  }

  userbyid=(data:any)=>
  {
    return this.http.post("http://localhost:8080/userbyid",data)
  }
}
