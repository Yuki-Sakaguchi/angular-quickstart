import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li>デフォルト：{{price | number}}</li>
    <li>小数第2位：{{price | number: '5.0-2'}}</li>
    <li>整数：{{price | number: '1.0-0'}}</li>
  </ul>`
  })
export class AppComponent  {
  price = 3500.1256;
}