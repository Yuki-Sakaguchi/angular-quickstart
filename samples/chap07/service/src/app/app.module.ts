import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookService }  from './book.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:    [ BookService ],
  /*
  providers: [
    <Provider> { provide: BookService, useClass: BookService, multi: false }
  ], 
  */
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
