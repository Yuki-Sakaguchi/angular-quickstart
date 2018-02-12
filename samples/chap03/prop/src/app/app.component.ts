import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //ブラケット構文
  template: `<img [src]="image" />`

  //bind-xxxxx属性
  //template: `<img bind-src="image" />`

  //Interpolation
  //template: `<img src="{{image}}" />`
})
export class AppComponent {
  image = 'http://www.wings.msn.to/image/wings.jpg';
}
