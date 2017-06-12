import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';
import {NgForm} from '@angular/forms';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {UserService} from '../services/user.service'

@Component({
  selector: 'add-accommondation',
  templateUrl: './add-accomodation.component.html',
})


export class AddAccomondationComponent implements OnInit {

    error: any;
    
    constructor(private router: Router, private userService: UserService) { }


  createAccomodation(acc: Accommondation, form: NgForm)
  {
    this.userService.postAccomodation(acc).then(accomondation => {
          acc = accomondation; // saved hero, w/ id if new
          this.goBack
          //todo, success, see all
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack()
  {
     this.router.navigate(['/userinfo']);
  }

  ngOnInit() {
  }

}
