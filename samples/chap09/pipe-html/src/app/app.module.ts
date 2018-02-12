import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Nl2brPipe }  from './nl2br.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Nl2brPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
