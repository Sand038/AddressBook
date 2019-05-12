import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserOpsService {

  constructor(private http: HttpClient) { }

  searchUser(userName: string) {
    return this.http.get('https://api.github.com/users/' + userName);
  }

  getAllUsers() {
    return this.http.get('https://api.github.com/users');
  }
}
