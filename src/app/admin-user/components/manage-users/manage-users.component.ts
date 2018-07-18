import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/user.service';
import { User } from 'shared/models/user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.allUsers;
  }

}
