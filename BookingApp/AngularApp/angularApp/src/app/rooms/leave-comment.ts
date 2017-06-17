import { Component, OnInit } from '@angular/core';
import { Accommondation } from '../models/accommondation.model'
import { Comment } from '../models/comment.model'
import { UserService } from '../services/user.service'

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'leave-comment',
  templateUrl: './leave-comment.html',
  styleUrls: ['./leave-comment.css']
})
export class CommentComponent implements OnInit {
  private hasExtra : boolean;
  private acc : Accommondation;

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.acc = JSON.parse(localStorage.getItem("acc")) as Accommondation;
    localStorage.removeItem("acc");

    if (this.acc === null) {
      this.goBack();
    }
  }

  goBack() {
     this.router.navigate(['/getRooms']);
     return;
  }

  createComment() {
    let text = (<HTMLInputElement>document.getElementById("text")).value;
    let grade = Number.parseInt((<HTMLInputElement>document.getElementById("grade")).value);

    let comment = new Comment(1, grade, text, JSON.parse(localStorage.getItem("user")), this.acc);
    this.userService.createComment(comment)
      .then(response => {
          alert("Comment added. Thanks for your feedback");
          this.router.navigate(['/getRooms']);
      });
  }
}


