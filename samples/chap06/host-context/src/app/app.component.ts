import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Angularアプリケーションプログラミング</h2>
    <p>こんにちは、{{name}}さん！</p>
  `,
  styles: [`
    :host-context(.summer-theme) p {
      background-color: #0ff;
      color: #f00;
      font-weight: bold;
    }
  `]
})

export class AppComponent  {
  name = 'Angular';
}
