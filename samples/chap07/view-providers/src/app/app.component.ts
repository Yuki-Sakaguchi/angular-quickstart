import { Component } from '@angular/core';
import { UseService } from './use.service';

@Component({
  selector: 'my-app',
  template: `
  <my-parent>
    <my-child></my-child>
  </my-parent>
  `,
})
export class AppComponent  { }
