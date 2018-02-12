import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li>デフォルト：{{price | currency }}</li>
    <li>コード：{{price | currency: 'JPY' }}</li>
    <li>単位（円）：{{price | currency: 'JPY' :true }}</li>
    <li>単位（ユーロ）：{{price | currency: 'EUR' :true }}</li>
    <li>桁数指定：{{price | currency: 'JPY' :true: '1.0-1' }}</li>
  </ul>`
})
export class AppComponent  {
  price = 3500.125;
}
