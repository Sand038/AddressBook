import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userName: string;
  response: any;

  constructor(private addressCardService: UserService) {
  }

  ngOnInit() {
  }

  searchUser() {
    this.addressCardService.searchUser(this.userName).subscribe((response) => this.response = response);
  }
}
