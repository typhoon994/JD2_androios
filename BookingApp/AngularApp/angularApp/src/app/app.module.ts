import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserInfoComponent } from './userinfo/userinfo.component';
import { AddAccomondationComponent } from './accommondation/add-accomodation.component';
import { AccomondationComponent } from './accommondation/accommondation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CommentComponent } from './rooms/leave-comment';
import { GetRoomsComponent } from './rooms/getrooms.component';
import { GetManagers } from './managers/getmanagers';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { MaterialModule } from '@angular/material';


import { LoggedInGuard } from './logged-in.guard'

const ChildRoutes = [

  ]

const Routes = [
  {path: "home", component: HomeComponent, children: ChildRoutes},
  {path: "userinfo", component: UserInfoComponent, canActivate: [LoggedInGuard]},
  {path: "about/:Id", component: AboutComponent},
  {path: "addAccomodation", component: AddAccomondationComponent},
  {path: "getAccomodations", component: AccomondationComponent},
  {path: "getRooms", component: GetRoomsComponent},
  {path: "getManagers", component: GetManagers},
  {path: "rooms", component: RoomsComponent},
  {path: "comment", component: CommentComponent},
  {path: "other", redirectTo:"home"},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserInfoComponent,
    AddAccomondationComponent,
    AccomondationComponent,
    RoomsComponent,
    GetRoomsComponent,
    GetManagers,
    CommentComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      MaterialModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthService, LoggedInGuard, UserService],//!LoggedInGuard also has to be included in providers!
  bootstrap: [AppComponent]
})
export class AppModule { }
