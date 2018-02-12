import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ParentComponent }  from './parent.component';
import { NoParentComponent }  from './noparent.component';
import { ChildComponent }  from './child.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ParentComponent, NoParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
