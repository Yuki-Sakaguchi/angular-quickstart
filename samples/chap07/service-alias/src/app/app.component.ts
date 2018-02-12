import { Component } from '@angular/core';
import { UseService } from './use.service';

@Component({
  selector: 'my-app',
  template: `
    <!--UseComponentコンポーネントを複数回呼び出し-->
    <ul>
      <my-use></my-use>
      <my-use></my-use>
      <my-use></my-use>
    </ul>
  `,
})
export class AppComponent { }
