import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import {AddressCardService} from './address-card.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AddressCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
