import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
