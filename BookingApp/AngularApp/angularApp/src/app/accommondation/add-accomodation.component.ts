import { Component, OnInit } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';

import {
  Router,
  ActivatedRoute
} from '@angular/router';



@Component({
  selector: 'add-accommondation',
  templateUrl: './add-accomodation.component.html',
})


export class AddAccomondationComponent implements OnInit {
    accommondations : Accommondation[];
    
  constructor(private router: Router) { }


  createAccomodation()
  {

  }

  goBack()
  {
     this.router.navigate(['/userinfo']);
  }

  ngOnInit() {
  }

}
