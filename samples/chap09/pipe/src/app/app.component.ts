import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <pre>{{msg}}</pre>
    <pre>{{msg | trim}}</pre>
  `,
})
export class AppComponent  {
  msg = '   WINGS Project   ';
}

