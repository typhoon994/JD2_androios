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
    selected : Accommondation = new Accommondation(1, "Test", "Test", "Test", "Test", 40.0, 30.0, "Test", true, null, 1, 1, null, null, null);
    //shouldShowDetails : boolean = false;

  constructor(private userService: UserService) { 
  }

  back()
  {

  }

  ngOnInit() {
    this.userService.getAccommondations()
      .then((accommondations) => {   
        this.selected = accommondations[0];
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
    //this.shouldShowDetails = this.selected !== acc;

    // if (this.shouldShowDetails) {
    //   this.selected = acc;
    //   return;
    // }

    // this.selected = new Accommondation(1, "Test", "Test", "Test", "Test", 40.0, 30.0, "Test", true, null, 1, 1, null, null, null);
  }
}
