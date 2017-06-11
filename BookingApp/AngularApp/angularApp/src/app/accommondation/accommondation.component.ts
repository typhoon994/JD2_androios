import { Component, OnInit } from '@angular/core';
import { Accomondation } from './models/accommondation.model';


@Component({
  selector: 'app-accommondation',
  templateUrl: './accommondation/accommondation.component.html',
})

export class AccomondationComponent implements OnInit {
    accommondations : Accomondation[];

  constructor() { }

  ngOnInit() {
  }

}
