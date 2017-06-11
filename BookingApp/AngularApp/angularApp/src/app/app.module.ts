import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserInfoComponent } from './userinfo/userinfo.component';

import { AuthService } from './services/auth.service';

import { LoggedInGuard } from './logged-in.guard'

const ChildRoutes = [

  ]

const Routes = [
  {path: "home", component: HomeComponent, children: ChildRoutes},
  {path: "userinfo", component: UserInfoComponent, canActivate: [LoggedInGuard]},
  {path: "about/:Id", component: AboutComponent},
  {path: "other", redirectTo:"home"},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthService, LoggedInGuard],//!LoggedInGuard also has to be included in providers!
  bootstrap: [AppComponent]
})
export class AppModule { }
