import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

import {
  Router,
  ActivatedRoute
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';

  user1 = new User(1, 'admin', 'admin@admin.co', 'admin');

 constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe();
   }
  

  logIn(){

var txtUsername = ""
var txtPassword = ""

window.onload = function() {
     txtUsername = document.getElementById("username").nodeValue;
     txtPassword = document.getElementById("password").nodeValue;
   
   alert(txtUsername);
}

    if (this.user1.username == txtUsername  && this.user1.password == txtPassword) {        
     this.authService.logIn();
     this.router.navigate(['/userinfo']);
   }
   else
   {
     alert("User not found!");
   }

   
  }

  logOut(){
    this.authService.logOut();
        this.router.navigate(['']);
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }
}
