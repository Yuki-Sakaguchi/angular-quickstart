import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Angularアプリケーションプログラミング</h2>
    <p>こんにちは、{{name}}さん！</p>
    `,
    styles: [`
      :host(.disable) {
        display: block;
        border: 1px solid #aaa;
        color: #fff;
        background-color: #ccc;
      }
  `]
})

export class AppComponent  {
  name = 'Angular';
}