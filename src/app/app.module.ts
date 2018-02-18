import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { EventComponent } from './event.component';
import { BookComponent } from './book.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EventComponent, BookComponent ],
  entryComponents: [ EventComponent, BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
