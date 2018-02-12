import { Component } from '@angular/core';
import { trigger, state, style,
  transition, animate} from '@angular/animations';

@Component({
  selector: 'my-app',
  animations: [
    trigger('btnState', [
      transition('off => on', [
        style({
          border: 'none',
          backgroundColor: '#fcf',
          color: '#0ff',
          fontWeight: 'normal',
          transform: 'scale(0.8) rotate(0deg)'
        }),
        animate('500ms linear', style({
          border: 'solid 1px #fff',
          backgroundColor: '#f00',
          color: '#fff',
          fontWeight: 'bold',
          transform: 'scale(1) rotate(5deg)'
        }))	
      ])
    ])
  ],
  template: `<input type="button" [value]="caption"
    [@btnState]="flag" (click)="toggle()" />`,
  styles:[` input{ width: 100px; height: 50px}`]
})
export class AppComponent  {
  flag = 'off';
  caption = 'オフ'

  toggle() {
    this.flag = (this.flag === 'on' ? 'off' : 'on');
    this.caption = (this.caption === 'オン' ? 'オフ' : 'オン');
  }
}
