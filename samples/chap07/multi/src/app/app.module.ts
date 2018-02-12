import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { KEYWORDS } from './app-info';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [
    { provide: KEYWORDS, useValue: 'TypeScript' },
    { provide: KEYWORDS, useValue: 'Angular' }
  ],

  //multiプロパティでサービスを追加
  /*
  providers: [
    { provide: KEYWORDS, useValue: 'TypeScript', multi: true },
    { provide: KEYWORDS, useValue: 'Angular', multi: true }
  ],
  */

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
