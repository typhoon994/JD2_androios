import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'get-rooms',
  templateUrl: './getRooms.component.html',
})




export class GetRoomsComponent implements OnInit {
    rooms : Room[];
    
  constructor(private userService: UserService) { 
  }

  back()
  {

  }

  ngOnInit() {
    this.userService.getRooms()
      .then((rooms) => {   
        this.rooms = rooms});
  }

}
