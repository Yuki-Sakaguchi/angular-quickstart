import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BooksData implements InMemoryDbService {
  createDb() {
    let books = [
      { 
        id: 1,
        isbn: '978-4-7741-8411-1',
        title: '改訂新版JavaScript本格入門',
        price: 2980
      },
      { 
        id: 2,
        isbn: '978-4-7980-4853-6',
        title: 'はじめてのAndroidアプリ開発 第2版',
        price: 3200
      },
      { 
        id: 3,
        isbn: '978-4-7741-8030-4',
        title: '［改訂新版］Javaポケットリファレンス',
        price: 2680
      },
      { 
        id: 4,
        isbn: '978-4-7981-3547-2',
        title: '独習PHP 第3版',
        price: 3200
      },
      { 
        id: 5,
        isbn: '978-4-8222-9893-7',
        title: '基礎からしっかり学ぶC++の教科書',
        price: 2800
      }
    ];
    return { books };
  }
}
