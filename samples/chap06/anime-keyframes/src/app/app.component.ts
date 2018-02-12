import { Component } from '@angular/core';
import { trigger, state, style,
  transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'my-app',
  animations: [
    trigger('labelState', [
      transition('void => *', [
        animate(1000, keyframes([
          style({ transform: 'translateX(100%)', offset: 0}),
          style({ transform: 'translateX(50px)', offset: 0.1}),
          style({ transform: 'translateX(0)',    offset: 1})
        ]))
      ]),
      transition('* => void', [
        animate(1000, keyframes([
          style({ transform: 'translateX(0)',    offset: 0}),
          style({ transform: 'translateX(50px)', offset: 0.9}),
          style({ transform: 'translateX(100%)', offset: 1})
        ]))
      ])
    ])
  ],
  template: `
    <label for="show">表示／非表示：</label>
    <input id="show" name="show" type="checkbox" [(ngModel)]="show" />
    <h2 *ngIf="show" [@labelState]="'active'">こんにちは、Angular！</h2>
  `
})
export class AppComponent  { }
