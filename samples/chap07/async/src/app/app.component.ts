import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
    <div>
      サーバーからのメッセージ：{{message | async}}
    </div>
  `
})
export class AppComponent {
  message: Observable<string>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.message = this.http.get('app/message.txt')
      .map(response => response.text());
  }
}
