import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <textarea [(ngModel)]="memo" cols="50" rows="7"></textarea>
    <div>{{memo | truncate }}</div>
    <div>{{memo | truncate : 20 : '～'}}</div>
  `,
})
export class AppComponent  { }
