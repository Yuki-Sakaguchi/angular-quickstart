import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { JsonpModule }  from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main.component';
import { HatenaComponent } from './hatena.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, JsonpModule, AppRoutingModule ],
  declarations: [ AppComponent, MainComponent, HatenaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
