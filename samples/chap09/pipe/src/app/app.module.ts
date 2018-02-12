import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TrimPipe }  from './trim.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TrimPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
