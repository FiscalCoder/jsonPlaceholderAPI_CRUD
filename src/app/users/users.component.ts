import { Component, OnInit } from '@angular/core';
// import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: []
})
export class UsersComponent implements OnInit {
  users = []
  constructor() { }

  ngOnInit() {
  }



}
