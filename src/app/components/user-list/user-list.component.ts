import { Component, OnInit } from '@angular/core';
import {UserOpsService} from '../../services/user-ops.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  response: any;

  constructor(private userService: UserOpsService) {
    userService.getAllUsers().subscribe((response) => this.response = response);
  }

  ngOnInit() {
  }

}
