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


 constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe();
   }
  

  logIn(username:string,  password:String){

//var txtUsername = ""
//var txtPassword = ""

   // if (this.user1.username == txtUsername  && this.user1.password == txtPassword) {        
     this.authService.logIn();
     this.router.navigate(['/userinfo']);
     var x = document.getElementById("1")

     if (x.style.display === 'none')
     {
       x.style.display = 'block'
     }
     else
     {
       x.style.display = 'none'
     }

   //}
   //else
   //{
    // alert("User not found!");
   //}

   
  }

  addAccomodation()
  {
    
    this.router.navigate(['/']);

  }

  

  logOut(){

    var x = document.getElementById("1")
    if (x.style.display === 'none')
     {
       x.style.display = 'block'
     }
     else
     {
       x.style.display = 'none'
     }

    this.authService.logOut();
        this.router.navigate(['']);
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }
}
