import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!--（1）テンプレートにインラインスタイルとして定義-->
    <style>
      h2 {
        font-size: 150%;
        text-decoration: underline;
        color: #369;
      }

      p {
        background-color: Yellow;
        color: Red;
      }
    </style>

    <!--（2）テンプレートからスタイルシートをインポート（<link>要素）-->
    <!--
    <link rel="stylesheet" href="app/app.component.css" />
    -->
    <h2>Angularアプリケーションプログラミング</h2>
    <p>こんにちは、{{name}}さん！</p>
  `,
  //styleUrls : [ './app.component.css' ]

})
export class AppComponent {
  name = 'Angular';
}
