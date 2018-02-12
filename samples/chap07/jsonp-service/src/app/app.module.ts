import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { JsonpModule }  from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, JsonpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
