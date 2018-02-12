import { Component } from '@angular/core';
import { OverService, SpecialOverService } from './over.service';

@Component({
  selector: 'my-child',
  providers:  [
    { provide: OverService, useClass: SpecialOverService }
  ],
  template: `
    <p>ChildComponent：{{over.show()}}</p>
  `
})
export class ChildComponent {
  constructor(private over: OverService) {}
}