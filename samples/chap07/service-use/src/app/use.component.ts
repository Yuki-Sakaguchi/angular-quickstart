import { Component } from '@angular/core';
import { UseService } from './use.service';

@Component({
  selector: 'my-use',
  providers: [
    { provide: UseService, useClass: UseService }
    //{ provide: UseService, useValue: new UseService() },
  ], 
  template: `<li>UseService：{{current}}</li>`
})
export class UseComponent {
  current: string;

  constructor(private use: UseService) {
    this.current = use.show();
  }
}
