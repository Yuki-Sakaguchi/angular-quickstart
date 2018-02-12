import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <textarea [(ngModel)]="memo" cols="50" rows="7"></textarea>
    <div [innerHTML]="memo | nl2br"></div>
  `,
})
export class AppComponent  { }
