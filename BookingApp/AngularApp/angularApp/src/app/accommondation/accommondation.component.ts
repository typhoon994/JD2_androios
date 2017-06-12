import { Component, OnInit } from '@angular/core';
import { Accommondation } from '../models/accommondation.model';


@Component({
  selector: 'app-accommondation',
  templateUrl: './accommondation.component.html',
})




export class AccomondationComponent implements OnInit {
    accommondations : Accommondation[];
    
  constructor() { }


  createAccomodation()
  {

  }

  back()
  {

  }

  ngOnInit() {
  }

}
