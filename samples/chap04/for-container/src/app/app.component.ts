import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ng-container *ngFor="let article of articles">
      <header>{{article.title}}</header>
      <div>{{article.body}}</div>
      <footer ng-repeat-end>（{{article.author}}）</footer>
    </ng-container>`
})
export class AppComponent  {
   articles = [
    {
      title: '改訂新版JavaScript本格入門',
      body: '「ECMAScript 2015」による新記法はもちろん、基本からオブジェクト指向構文、Ajax、クライアントサイド開発まで詳しく解説しています。',
      author: '山田祥寛'
    },
    {
      title: 'Swiftポケットリファレンス',
      body: 'iOSのフレームワークの解説から全く新しい操作性を実現する3D Touchまで網羅。',
      author: '片渕彼富'
    },
    {
      title: '［改訂新版］Javaポケットリファレンス',
      body: '初版でのJava SE 6までの標準ライブラリに加え，Java SE 7や8で追加された機能も扱っています。',
      author: '高江賢'
    },
  ];
}

