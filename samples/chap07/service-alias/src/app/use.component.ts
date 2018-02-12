import { Component } from '@angular/core';
import { UseService } from './use.service';
import { AliasService } from './alias.service';

@Component({
  selector: 'my-use',
  providers: [
    { provide: UseService, useClass: UseService },
    { provide: AliasService, useExisting: UseService }
  ], 
  template: `<li>UseService：{{current}}</li>`,
})
export class UseComponent {
  current: string;

  constructor(private use: AliasService) {
    this.current = use.show();
  }
}
