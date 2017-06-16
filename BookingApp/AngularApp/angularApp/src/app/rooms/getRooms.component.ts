import { Component, OnInit } from '@angular/core';
import { RoomReservation } from '../models/roomreservation.model';
import { Room } from '../models/room.model';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import {
  Router,
  ActivatedRoute
} from '@angular/router';


@Component({
  selector: 'get-rooms',
  templateUrl: './getRooms.component.html',
})




export class GetRoomsComponent implements OnInit {
  rooms: Room[] = [];
  reservations: RoomReservation[] = [];

  constructor(private userService: UserService, private router: Router) {


  }

  back() {
    this.router.navigate(['/userinfo'])
  }

  reserve(room: Room) {
    this.userService.getReservations()
      .then((reservations) => {
        this.reservations = reservations
    let startDate = new Date((<HTMLInputElement>document.getElementById("startDate")).value);
    let endDate = new Date((<HTMLInputElement>document.getElementById("endDate")).value);

    let userString = localStorage.getItem('user');
    let user = JSON.parse(userString) as User;

    if (startDate > endDate) {
      alert("Please select proper date.");
      return
    }

    if (this.reservations.length == 0) {

      var res: RoomReservation = new RoomReservation(endDate, startDate, startDate, room, user);

      this.userService.reserveRoom(res)
        .then((accommondation) => {
          alert("Room sucessfuly reserved.");
        });
    }

    for (let r of this.reservations) {


      if (room.Id == r.Id && startDate < r.StartDate && startDate > r.EndDate && endDate > r.EndDate) {
        var res: RoomReservation = new RoomReservation(endDate, startDate, startDate, room, user);

        this.userService.reserveRoom(res)
          .then((accommondation) => {
            alert("Room sucessfuly reserved.");
          });
      }
      else {
        alert("Room is already reserved in selected period.")
      }
    }

      });
  }

  comment(room : Room) {
    this.userService.wasRoomReseverd(room.Id, localStorage.getItem('username'))
      .then(response => {
          if (response) {
             localStorage.setItem("acc", JSON.stringify(room.accomodation));
             this.router.navigate(['/comment']);
             return;
          }

          alert("Reserve a room first, then leave a comment");
      });
  }

  ngOnInit() {

    this.userService.getReservations()
      .then((reservations) => {
        this.reservations = reservations
      });

    this.userService.getRooms()
      .then((rooms) => {

        for (let r of rooms) {
          if (r.accomodation.Approved == false)
            rooms.splice(rooms.indexOf(r), 1);

        }

        this.rooms = rooms
      });


  }

}
