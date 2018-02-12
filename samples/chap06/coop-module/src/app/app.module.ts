import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoopModule } from './coop/coop.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CoopModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
