import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Angularアプリケーションプログラミング</h2>
    <p>こんにちは、{{name}}さん！</p>
  `,
  //styleUrls: ['./app.component.css'],

  styles: [`
    h2 {
      font-size: 150%;
      text-decoration: underline;
      color: #369;
    }

    p {
      background-color: Yellow;
      color: Red;
    }
  `],

/*
  //複数の文字列で指定
  styles: [`
  h2 {
    font-size: 150%;
    text-decoration: underline;
    color: #369;
  }
  `,`
  p {
    background-color: Yellow;
    color: Red;
  }
`]
*/
  //encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  name = 'Angular';
}
