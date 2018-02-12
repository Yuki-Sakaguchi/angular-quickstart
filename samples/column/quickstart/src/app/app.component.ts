import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
//nameプロパティのデフォルト値を設定
export class AppComponent  { name = 'Angular'; }
