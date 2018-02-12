import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Angularアプリケーションプログラミング</h2>
    <p>こんにちは、{{name}}さん！</p>
    `,
    styles: [`
      :host {
        display: block;
        border: 1px double Red;
        background-color: Yellow;
      }
  `]
})

export class AppComponent  {
  name = 'Angular';
}
