import { Component, Injector } from '@angular/core';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'my-app',
  template: `
    <table class="table">
      <tr>
      <th>ISBNコード</th><th>書名</th><th>価格</th><th>出版社</th>
      </tr>
      <tr *ngFor="let b of books">
        <td>{{b.isbn}}</td>
        <td>{{b.title}}</td>
        <td>{{b.price}}円</td>
        <td>{{b.publisher}}</td>
      </tr>
    </table>
  `,
})
export class AppComponent {
  books :Book[];

  constructor(private injector: Injector) {}

  ngOnInit() {
    let bookservice = this.injector.get(BookService);
    this.books = bookservice.getBooks();
  }
}
