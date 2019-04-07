import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegister=false;
  action='Login'
  loginobj:any={
    email:'',
    password:'',
    repassword:''
  }
  passwordnotmatched;
  loginFail;
  userCreated;
  constructor(private compserv:ComplaintService,private router:Router) { }

  ngOnInit() {
    
  }

  register(){
    this.isRegister=true;
    this.action='Register'

  }
  login(){
    this.isRegister=false;
    this.action='Login'
  }

  userlogin(){
    this.passwordnotmatched='';
    this.loginFail='';
    this.userCreated='';
    this.compserv.login(this.loginobj).subscribe(data=>{
      console.log(data)
      if(data["status"]===200){
        this.loginobj={
          email:'',
          password:'',
          repassword:''
        }
        let token=data['token']
        localStorage.setItem('compToken',token)
        this.router.navigate(['/'])
      }else{
        this.loginFail="Please Enter Correct userName And Password"
      }
     
    })
  }
  userRegister(){
    this.passwordnotmatched='';
    this.loginFail='';
    this.userCreated='';
    if(this.loginobj.password==this.loginobj.repassword){
    this.compserv.Register(this.loginobj).subscribe(data=>{
      console.log(data)
      if(data['status']===200){
             this.loginobj={
          email:'',
          password:'',
          repassword:''
        }
        this.isRegister=false;
        this.userCreated=data['message']
      }else if(data['status']===500){
        this.loginobj={
          email:'',
          password:'',
          repassword:''
        }
        this.passwordnotmatched=data['message'];

      }else{
        this.passwordnotmatched='some Error Occured';
      }


    })
  }else{

    
      this.passwordnotmatched='Please Make sure Confirm Password';

  }
  }

}
