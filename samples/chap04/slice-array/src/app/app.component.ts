import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li>{{ary}}</li>
    <li>{{ary | slice: 3}}</li>
    <li>{{ary | slice: 3 :5}}</li>
    <li>{{ary | slice: 7}}</li>
    <li>{{ary | slice: -3}}</li>
    <li>{{ary | slice: -3 :-2}}</li>
    <li>{{ary | slice: -10}}</li>
    </ul>`
  })
export class AppComponent  {
  ary = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
}
