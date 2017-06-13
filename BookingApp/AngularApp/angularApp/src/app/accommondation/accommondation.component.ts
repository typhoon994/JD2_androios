import { Component, OnInit } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accommondation',
  templateUrl: './accommondation.component.html',
})




export class AccomondationComponent implements OnInit {
    accommondations : Accommondation[];
    hidden: boolean = true;
    
  constructor(private userService: UserService) { 
  }

  back()
  {

  }

  ngOnInit() {
    this.userService.getAccommondations()
      .then((accommondations) => {   
        this.accommondations = accommondations});
  }

  approveAccommondation(acc : Accommondation) {
    acc.Approved = true;
    this.userService.putAccomodation(acc)
     .then((accommondation) => {   
        // todo: handle response
      });
  }
}
