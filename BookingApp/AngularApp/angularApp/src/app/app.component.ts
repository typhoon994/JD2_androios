import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { Login } from './models/login.model';
import {NgForm} from '@angular/forms';

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


 constructor(private userService : UserService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe();
   }
  

  logIn(loginParam : Login, form : NgForm){
    if (this.authService.isLoggedIn()) {
      this.logOut();
      return;
    }

     this.userService.login(loginParam)
      .then( response => {
        debugger
       this.authService.logIn();
       this.router.navigate(['/userinfo']);

     })
     .catch(error => {
     alert("User not found!")}) ;
     
  }

  addAccomodation()
  {   
    this.router.navigate(['/']);
  }



  logOut(){ 
    this.authService.logOut();
    this.router.navigate(['']);
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }
}
