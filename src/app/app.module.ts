import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserResgirationComponent } from './user-resgiration/user-resgiration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmnavComponent } from './admnav/admnav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavComponent } from './nav/nav.component';

const myRoutes:Routes =[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userrsg",
    component:UserResgirationComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserResgirationComponent,
    DashboardComponent,
    AdmnavComponent,
    UserProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
