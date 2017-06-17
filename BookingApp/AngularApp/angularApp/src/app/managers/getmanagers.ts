import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-getmanagers',
  templateUrl: './getmanagers.html',
   styleUrls: ['./getmanagers.css']
})


export class GetManagers implements OnInit {
  managers: User[];
  manager: User;

  constructor(private userService: UserService) {
  }

  denie(manager: User) {
    for (let m of this.managers) {
      if (manager == m && m.Approved == false) {
        alert("Manager already denied!");
      }
      else {
        manager.Approved = false;
        this.userService.putUser(manager)
          .then(manager => {
            this.manager = manager;
            alert("Manager denied.");
          })

      }
    }

  }

  approve(manager: User) {
   for (let m of this.managers) {
      if (manager == m && m.Approved == true) {
        alert("Manager already approved!");
      }
      else {
        manager.Approved = true;
        this.userService.putUser(manager)
          .then(manager => {
            this.manager = manager;
            alert("Manager approved.");
          })

      }
    }
  }
  ngOnInit() {

    this.userService.getManagers()
      .then((users) => {
        this.managers = users
      });
  }


}
