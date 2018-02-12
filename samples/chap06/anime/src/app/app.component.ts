import { Component } from '@angular/core';
import { trigger, state, style,
  transition, animate} from '@angular/animations';

@Component({
  selector: 'my-app',
  animations: [
    trigger('btnState', [
      state('off', style({
        border: 'none',
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'normal',
        transform: 'scale(0.8) rotate(0deg)'
      })),
      state('on',   style({
        border: 'solid 1px #fff',
        backgroundColor: '#f00',
        color: '#fff',
        fontWeight: 'bold',
        transform: 'scale(1) rotate(5deg)'
      })),
      transition('off => on', animate('200ms linear')),
      transition('on => off', animate('200ms linear'))
      
      //transition関数の省略形
      //transition('off => on, on => off', animate('200ms linear'))
      //transition('off <=> on', animate('200ms linear')),
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
