import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <table class="table">
     <tr>
      <th>ISBNコード</th><th>書名</th><th>価格</th><th>出版社</th>
      </tr>
      <tr *ngFor="let b of books | slice: start: start+len">
        <td>{{b.isbn}}</td>
        <td>{{b.title}}</td>
        <td>{{b.price}}円</td>
        <td>{{b.publisher}}</td>
      </tr>
    </table>
    <ul class="pagination">
      <li><a href="#" (click)="pager(0)">1</a></li>
      <li><a href="#" (click)="pager(1)">2</a></li>
      <li><a href="#" (click)="pager(2)">3</a></li>
    </ul>
  `
})
export class AppComponent {
  start = 0;
  len = 3;

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
    },
        {
      isbn: '978-4-7741-8883-6',
      title: 'Ruby on Rails 5アプリケーションプログラミング',
      price: 3600,
      publisher: '技術評論社',
    },
        {
      isbn: '978-4-7981-5081-9',
      title: 'デザインサンプルで学ぶCSSによる実践スタイリング入門  ',
      price: 1600,
      publisher: '翔泳社',
    }
  ];

  pager(page: number) {
    this.start = this.len * page;
  }
}
