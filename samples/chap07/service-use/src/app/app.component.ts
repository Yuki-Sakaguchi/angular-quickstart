import { Component } from '@angular/core';
import { UseService } from './use.service';

@Component({
  selector: 'my-app',
  /*
  providers: [
    { provide: UseService, useClass: UseService }
  ],
  */
  template: `
    <ul>
      <my-use></my-use>
      <my-use></my-use>
      <my-use></my-use>
    </ul>
  `,
})
export class AppComponent { }
