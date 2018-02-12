import { Component, Inject } from '@angular/core';

import { AppInfo } from './app-info';

@Component({
  selector: 'my-app',
  template: ``,
})
export class AppComponent  { 
  constructor(@Inject(AppInfo)private info: any) {
    console.log(info);
  }
}
