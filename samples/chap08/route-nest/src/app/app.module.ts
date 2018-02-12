import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MY_ROUTES }   from './app.routing';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main.component';
import { ChildComponent }  from './child.component';
import { ContentComponent }  from './content.component';
import { ErrorComponent } from './error.component';

@NgModule({
  imports:      [ BrowserModule, MY_ROUTES ],
  declarations: [ AppComponent, MainComponent,
    ChildComponent, ContentComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
