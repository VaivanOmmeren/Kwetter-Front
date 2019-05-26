import { Component, OnInit } from '@angular/core';
import {User} from '../classes/User';
import {UserService} from '../service/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedUser: User;
  users: User[];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
