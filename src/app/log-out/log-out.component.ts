import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.logOut()
  }

  logOut(){
    let token = localStorage.getItem('compToken')
    if(token){
  
  localStorage.removeItem('compToken')
  localStorage.clear()
  this.router.navigate(['/login'])
  }
    }

}
