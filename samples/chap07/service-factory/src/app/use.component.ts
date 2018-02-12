import { Component } from '@angular/core';
import { UseService } from './use.service';

@Component({
  selector: 'my-use',
  providers: [
    { provide: UseService, useFactory: () => {
        let service = new UseService();
        service.created.setSeconds(0);
        service.created.setMilliseconds(0);
        return service;
      }
    }
  ], 
  template: `<li>UseService：{{current}}</li>`,
})
export class UseComponent {
  current: string;

  constructor(private use: UseService) {
    this.current = use.show();
  }
}
