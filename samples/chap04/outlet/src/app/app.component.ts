import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!--テンプレートを準備-->
    <ng-template #myTemp let-isbn="isbn" let-title="title"
      let-price="price" let-publisher="publisher">
      <div>
      <img src="http://www.wings.msn.to/books/{{isbn}}/{{isbn}}.jpg" />
      <ul>
        <li>{{title}}</li>
        <li>{{publisher}}発行</li>
        <li>定価 {{price}}円</li>
      </ul>
      </div>
    </ng-template>

    <select name="temp" [(ngModel)]="temp">
      <option *ngFor="let b of books; let i = index" [value]="i">
        {{b.title}}</option>
    </select>
    <ng-container *ngTemplateOutlet="myTemp; context: books[temp]">
    </ng-container>    
  `
})
export class AppComponent {
  temp = 0;
  books = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
      price: 3200,
      publisher: '秀和システム',
    },
    {
      isbn: '978-4-7741-8030-4',
      title: '［改訂新版］Javaポケットリファレンス',
      price: 2680,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7981-3547-2',
      title: '独習PHP 第3版',
      price: 3200,
      publisher: '翔泳社',
    },        
    {
      isbn: '978-4-8222-9893-7',
      title: '基礎からしっかり学ぶC++の教科書',
      price: 2800,
      publisher: '日経BP社',
    }
  ];
}