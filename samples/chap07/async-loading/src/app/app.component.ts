import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'my-app',
  template: `
    <div *ngIf="message|async as msg; else prog">
      サーバーからのメッセージ：{{msg}}
    </div>
    <ng-template #prog>Now Loading...</ng-template>
  `
})
export class AppComponent {
  message: Observable<string>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.message = this.http.get('app/message.txt')
      .delay(3000)
      .map(response => response.text());
  }
}
