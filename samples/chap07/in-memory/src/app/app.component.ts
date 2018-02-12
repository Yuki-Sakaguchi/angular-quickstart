import { Component } from '@angular/core';
import { Http, Headers }      from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let b of books">{{b.title}}（{{b.price}}円）</li>
    </ul>
    id=<input type="text" #num size="2" />
    <input type="button" (click)="get(num.value)" value="表示" />
    <input type="button" (click)="insert()" value="追加" />
    <input type="button" (click)="update()" value="更新" />
    <input type="button" (click)="delete()" value="削除" />
  `,
})
export class AppComponent  {
  books: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('/api/books').subscribe(
      response => {
        console.log(response.json());
        this.books = response.json().data;
      }
    );
  }

  get(num : number) {
    this.http.get(`/api/books/${num}`).subscribe(
      response => {
        console.log(response.json().data);
      }
    );
  }

  insert() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('api/books',
      {
        isbn: '978-4-7741-8833-6',
        title: 'Ruby on Rails 5 アプリケーションプログラミング',
        price: 3500
      },
      { headers: headers })
        .subscribe(response => {
          this.getAll();
        });
  }

  update() {
    let headers = new Headers({ 'Content-Type': 'application/json' });  
    this.http.put('api/books/1',
      {
        id: 1,
        isbn: '978-4-7741-8411-X',
        title: 'Angular 2 アプリケーションプログラミング',
        price: 3700
      },
      { headers: headers })
        .subscribe(response => {
          this.getAll();
        });
  }

  delete() {
    this.http.delete('api/books/1')
      .subscribe(response => {
        this.getAll();
      });
  }  
}
