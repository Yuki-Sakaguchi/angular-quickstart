import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UseService }  from './use.service';
import { UseComponent }  from './use.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UseComponent  ],
  providers:    [ UseService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
