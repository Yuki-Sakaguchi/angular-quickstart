import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <p>こんにちは、Angularさん！</p>
    <my-child></my-child>
  `,
  //配下の子コンポーネントにスタイル定義されない  
  styles: [`
    p {
      background-color: Yellow;
      color: Red;
    }  
  `]
  

  /*
  //配下の子コンポーネントにスタイル定義される  
  styles: [`
    :host /deep/ p {
      background-color: Yellow;
      color: Red;
    }  
  `]
  */
})
export class AppComponent { }
