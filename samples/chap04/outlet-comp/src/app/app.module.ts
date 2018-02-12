import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EventComponent }  from './event.component';
import { BookComponent }  from './book.component';
import { WingsComponent }  from './wings.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
    EventComponent, BookComponent, WingsComponent ],
  entryComponents: [ EventComponent, BookComponent, WingsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
