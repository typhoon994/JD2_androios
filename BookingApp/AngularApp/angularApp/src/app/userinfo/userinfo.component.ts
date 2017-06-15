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
  email: string = localStorage.getItem("email");
  username: string = localStorage.getItem("username");

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addAccomodation() {
    this.router.navigate(['/addAccomodation']);

  }

  approveAccomodation() {
    this.router.navigate(['/getAccomodations']);
  }

  reserveRoom() {
    this.router.navigate(['/getRooms']);

  }

  addRooms() {
    this.router.navigate(['/rooms']);
  }

  isUserNotManager(): boolean {
    return localStorage.getItem("role") !== 'Manager';
  }

  isUserNotAdmin(): boolean {
    return localStorage.getItem("role") !== 'Admin';
  }

   isNotUser(): boolean {
    return localStorage.getItem("role") !== 'User';
  }
}
