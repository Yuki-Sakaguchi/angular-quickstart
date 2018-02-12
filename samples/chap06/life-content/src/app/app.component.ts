import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-parent>
      <my-child></my-child>
    </my-parent>
  `,
})
export class AppComponent { }
