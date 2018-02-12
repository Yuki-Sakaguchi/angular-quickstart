import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { OpaqueToken } from '@angular/core';
import { APP_INFO, MY_APP_INFO } from './app-info';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [
    { provide: APP_INFO, useValue: MY_APP_INFO }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
