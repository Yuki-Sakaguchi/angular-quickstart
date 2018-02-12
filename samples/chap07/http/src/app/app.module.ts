import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, RequestOptions, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyRequestOptions } from "./my-request-options";

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  /*
  providers:    [
    { provide: RequestOptions, useClass: MyRequestOptions }
  ]
  */

  //XSRF対策
  providers:    [
    { provide: XSRFStrategy,
       useValue: new CookieXSRFStrategy('CSRF-TOKEN', 'X-CSRF-TOKEN') }
  ]
})
export class AppModule { }
