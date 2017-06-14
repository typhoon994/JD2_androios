import { Component, OnInit } from '@angular/core';
import { Room } from "../models/room.model";
import { Accommondation } from "../models/accommondation.model";
import {UserService} from '../services/user.service'
import {NgForm} from '@angular/forms';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'add-room',
  templateUrl: './rooms.component.html',
})
export class RoomsComponent implements OnInit {
  
     accomodations: Accommondation[];

  constructor(private userService: UserService, private router:Router) { }

  createRoom(room : Room, form: NgForm)
  {
    debugger
    var accElement = Number.parseInt((<HTMLInputElement>document.getElementById("accDropDown")).value);
   
   this.accomodations.forEach(acc => {
     if (acc.Id == accElement)
     room.Accomodation =  acc;
   });

    

    this.userService.postRoom(room);
  }

    goBack()
  {
     this.router.navigate(['/userinfo']);
  }


  ngOnInit() {
         this.userService.getAccommondations()
      .then((accommondation) => {   
    
        this.accomodations = accommondation});
  }
  
}

