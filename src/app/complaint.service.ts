import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
token;
httpOptions:any={}
  constructor(private http:HttpClient) { }



  getComplaintDetails(){
  this.token = localStorage.getItem('compToken');
  console.log(this.token)

this.httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })
}
    let response = this.http.get('http://localhost:3000/complaint/getComplaintDetails');
    return response;
  }
  getStatuses(){
    this.token = localStorage.getItem('compToken');
this.httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })
}
    let response = this.http.get('http://localhost:3000/complaint/getStatuses');
    return response;
  }
  updateStatus(data){ 
    this.token = localStorage.getItem('compToken');
this.httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })
}
    let response = this.http.post('http://localhost:3000/complaint/updateComplaint',data);
    return response;
  }
  isAuth(){
    let token = localStorage.getItem('compToken')
    if(token){
      return true
    }else{
      return false
    }
  }

  login(data){
    console.log('log')

    let responce = this.http.post('http://localhost:3000/user/login',data)
    return responce;
  }
  Register(data){

    let responce = this.http.post('http://localhost:3000/user/signUp',data)
    return responce;
  }
}
