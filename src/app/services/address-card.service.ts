import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressCardService {

  constructor(private http: HttpClient) { }

  searchUser(userName: string) {
    return this.http.get('https://api.github.com/users/' + userName);
  }
}
