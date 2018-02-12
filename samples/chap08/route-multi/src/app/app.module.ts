import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MY_ROUTES }   from './app.routing';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main.component';
import { ExampleComponent }  from './example.component';
import { SearchComponent } from './search.componnet';
import { ErrorComponent } from './error.component';

@NgModule({
  imports:      [ BrowserModule, MY_ROUTES ],
  declarations: [ AppComponent, MainComponent,
    ExampleComponent, SearchComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
