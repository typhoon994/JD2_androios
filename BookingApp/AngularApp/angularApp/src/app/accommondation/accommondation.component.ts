import { Component, OnInit } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accommondation',
  templateUrl: './accommondation.component.html',
  styleUrls: ['./accommondation.component.css'],
})


export class AccomondationComponent implements OnInit {
    accommondations : Accommondation[];
    hidden: boolean = true;
    selected : Accommondation;
    
  constructor(private userService: UserService) { 
  }

  back()
  {

  }

  ngOnInit() {
    this.userService.getAccommondations()
      .then((accommondations) => {   
        debugger
        this.accommondations = accommondations});
  }

  approveAccommondation(acc : Accommondation) {
    acc.Approved = true;
    this.userService.putAccomodation(acc)
     .then((accommondation) => {   
        // todo: handle response
      });
  }

  selectAcc(acc : Accommondation) {
    this.selected = acc;
  }
}
