import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main.component';
import { ArticleComponent } from './article.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, MainComponent, ArticleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
