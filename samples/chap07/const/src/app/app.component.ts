import { Component, Inject } from '@angular/core';

import { APP_INFO } from './app-info';

@Component({
  selector: 'my-app',
  template: ``,
})
export class AppComponent  { 
  constructor(@Inject(APP_INFO)private info: any) {
    console.log(info);
  }
}
