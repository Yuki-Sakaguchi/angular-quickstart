import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let b of books">{{b.title}}（{{b.isbn}}）</li>
      <!--<li *ngFor="let b of books; trackBy: trackFn">{{b.title}}（{{b.isbn}}）</li>-->
    </ul>
    <input type="button" (click)="onclick()" value="更新" />
  `
})
export class AppComponent {
  books = [
    { isbn: '978-4-7741-8411-1', 
      title: '改訂新版JavaScript本格入門' },
    { isbn: '978-4-7980-4853-6', 
      title: 'はじめてのAndroidアプリ開発 第2版' },
    { isbn: '978-4-7741-8030-4', 
      title: '［改訂新版］Javaポケットリファレンス' }
  ];

  onclick() {
    this.books = [
      { isbn: '978-4-7741-8411-1', 
        title: '改訂新版JavaScript本格入門' },
      { isbn: '978-4-7980-4853-6', 
        title: 'はじめてのAndroidアプリ開発 第2版' },
      { isbn: '978-4-7741-8030-4', 
        title: '［改訂新版］Javaポケットリファレンス' },     
      { isbn: '978-4-7981-3547-2', 
        title: '独習PHP 第3版' }
    ];
  }
  /*
  trackFn(index: any, book: any) {
    return book.isbn;
  }
  */
}