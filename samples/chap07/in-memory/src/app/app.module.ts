import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent }  from './app.component';
import { BooksData } from './books-data';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(BooksData)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
