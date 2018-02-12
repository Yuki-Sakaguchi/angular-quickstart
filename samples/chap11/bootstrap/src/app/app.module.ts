import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent }  from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
