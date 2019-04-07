import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AuthGaurd} from './auth-gaurds';
import { LogOutComponent } from './log-out/log-out.component'
const route:Routes = [
  {path:'',canActivate:[AuthGaurd],component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logOut',component:LogOutComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)

  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
