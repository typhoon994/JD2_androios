import { Component, OnInit } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accommondation',
  templateUrl: './accommondation.component.html',
})




export class AccomondationComponent implements OnInit {
    accommondations : Accommondation[];
    
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

}
