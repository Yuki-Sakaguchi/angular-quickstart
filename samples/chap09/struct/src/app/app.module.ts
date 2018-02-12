import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DeadlineDirective }  from './deadline.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DeadlineDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
