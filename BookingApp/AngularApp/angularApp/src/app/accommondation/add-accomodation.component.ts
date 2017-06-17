import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';
import { Place } from '../models/place.model';
import { AccomodationType } from '../models/accomodationtype.model';
import { RoomReservation } from '../models/roomreservation.model';
import { Room } from '../models/room.model';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { UserService } from '../services/user.service'

@Component({
  selector: 'add-accommondation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.css']
})


export class AddAccomondationComponent implements OnInit {

  error: any;
  rooms: Room[] = [];
  places: Place[] = [];
  types: AccomodationType[] = [];
  users: User[] = [];


  constructor(private router: Router, private userService: UserService) {
  }

  createAccomodation(acc: Accommondation, form: NgForm) {
    debugger
    if (acc.Name == null || acc.Address == null || acc.AverageGrade == null || acc.Description == null || acc.ImageUrl == null) {
      alert("Please fill all fields.");
    }
    else {
      var
        placeElement = Number.parseInt((<HTMLInputElement>document.getElementById("placeDropDown")).value);
      acc.Place = this.places[placeElement - 1];

      var ownerElement = Number.parseInt((<HTMLInputElement>document.getElementById("ownerDropDown")).value);
      acc.Owner = this.users[ownerElement - 1];

      acc.Approved = false;

      if (acc.Owner.Approved == true) {

        this.userService.postAccomodation(acc).then(accomondation => {
          acc = accomondation; // saved hero, w/ id if new
          debugger
          this.goBack
          alert("Accomodation sucessfuly added.");
        })
          .catch(error => this.error = error);
      }
      else
      { alert("User not allowed to add accomodations!") }
    }
  }

  goBack() {
    this.router.navigate(['/userinfo']);
  }



  getRooms() {

  }

  ngOnInit() {

    this.userService.getRooms()
      .then((rooms) => {

        this.rooms = rooms
      });

    this.userService.getPlaces()
      .then((places) => {
        debugger
        this.places = places
      });

    this.userService.getTypes()
      .then((types) => {

        this.types = types
      });



    this.userService.getUsers()
      .then((users) => {

        this.users = users
      });
  }

}
