import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  books = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
      release: new Date('2016,8,30')
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
      price: 3200,
      publisher: '秀和システム',
      release: new Date('2016,11,16')
    },
    {
      isbn: '978-4-7741-8030-4',
      title: '［改訂新版］Javaポケットリファレンス',
      price: 2680,
      publisher: '技術評論社',
      release: new Date('2016,2,18')
    },
    {
      isbn: '978-4-7981-3547-2',
      title: '独習PHP 第3版',
      price: 3200,
      publisher: '翔泳社',
      release: new Date('2016,3,8')
    },        
    {
      isbn: '978-4-8222-9893-7',
      title: '基礎からしっかり学ぶC++の教科書',
      price: 2800,
      publisher: '日経BP社',
      release: new Date('2017,1,16')
    }
  ]
}
