import { Component, OnInit } from '@angular/core';
import {UserOpsService} from '../../services/user-ops.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userName: string;
  response: any;

  constructor(private addressCardService: UserOpsService) {
  }

  ngOnInit() {
  }

  searchUser() {
    this.addressCardService.searchUser(this.userName).subscribe((response) => this.response = response);
  }
}
