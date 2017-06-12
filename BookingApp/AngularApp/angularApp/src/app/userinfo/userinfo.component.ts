import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

addAccomodation()
{
  this.router.navigate(['/addAccomodation']);

}

approveAccomodation()
{
  this.router.navigate(['/getAccomodations']);
}

}
