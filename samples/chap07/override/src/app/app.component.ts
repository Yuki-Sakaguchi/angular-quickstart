import { Component } from '@angular/core';
import { OverService } from './over.service';

@Component({
  selector: 'my-app',
  providers:  [
    { provide: OverService, useClass: OverService }
  ],
  template: `
    <p>AppComponent：{{over.show()}}</p>
    <my-child></my-child>
  `
})
export class AppComponent {
  constructor(private over: OverService) {}
}
