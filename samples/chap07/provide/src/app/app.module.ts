import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Hoge } from './hoge';
import { BookService }  from './book.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:    [ 
  { provide: Hoge, useClass: BookService }
], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
