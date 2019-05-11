import {Component, OnInit} from '@angular/core';
import {AddressCardService} from './address-card.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private svc: AddressCardService, private http: HttpClient) {
    console.log('');
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/koushikkothagal').subscribe((response) => console.log(response));
  }
}
