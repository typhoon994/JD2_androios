import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-getmanagers',
  templateUrl: './getmanagers.html',
})


export class GetManagers implements OnInit {
    managers : User[];

    
  constructor(private userService: UserService) { 
  }

  back()
  {

  }

  ngOnInit() {

    this.userService.getManagers()
      .then((users) => {   
        this.managers = users});
  }


}
