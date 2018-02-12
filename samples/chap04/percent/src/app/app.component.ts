import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li>デフォルト：{{num | percent}}</li>
    <li>小数第1位：{{num | percent: '1.0-1'}}</li>
  </ul>`
})
export class AppComponent  {
  num = 0.123456;
}
