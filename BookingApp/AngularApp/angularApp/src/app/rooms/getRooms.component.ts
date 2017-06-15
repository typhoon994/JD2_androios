import { Component, OnInit } from '@angular/core';
import { RoomReservation } from '../models/roomreservation.model';
import { Room } from '../models/room.model';
import { UserService } from '../services/user.service';

import {
  Router,
  ActivatedRoute
} from '@angular/router';


@Component({
  selector: 'get-rooms',
  templateUrl: './getRooms.component.html',
})




export class GetRoomsComponent implements OnInit {
    rooms : Room[] = [];
    
  constructor(private userService: UserService, private router:Router) { 


  }

  back()
  {
    this.router.navigate(['/userinfo'])
  }
  
  reserve(room:Room)
  {
   
    let startDate = new Date((<HTMLInputElement>document.getElementById("startDate")).value);
    let endDate = new Date((<HTMLInputElement>document.getElementById("endDate")).value);

 var res: RoomReservation =  new RoomReservation(endDate, startDate, startDate, room);

    this.userService.reserveRoom(res)
     .then((accommondation) => {   
        // todo: handle response
      });
  }

  comment()
  {
     this.router.navigate(['/comment'])
  }

  ngOnInit() {
    this.userService.getRooms()
      .then((rooms) => {  

      for (let r of rooms)
      {
        debugger
        if (r.accomodation.Approved == false) 
        rooms.splice(rooms.indexOf(r),1);
        
      }

        this.rooms = rooms});

        
  }

}
