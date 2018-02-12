import { Component, OnInit, Optional } from '@angular/core';
import { UseService } from './use.service';

@Component({
  selector: 'my-child',
  template: `
    <p>{{current}}</p>
  `,
})
export class ChildComponent implements OnInit {
  current = '';

  constructor(@Optional() private use: UseService) {}

  ngOnInit() {
    if (this.use) {
      this.current = this.use.show();
    }
  }	
}
