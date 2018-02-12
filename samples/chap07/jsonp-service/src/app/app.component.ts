import { Component } from '@angular/core';
import { Jsonp, URLSearchParams }  from '@angular/http';
import { HatenaService } from './hatena.service';

@Component({
  selector: 'my-app',
  providers: [ HatenaService ],
  template: `
  <form>
    <label for="url">URL：</label>
    <input id="url" name="url" type="url" size="50" [(ngModel)]="url" />
    <button (click)="onclick()">検索</button>
  </form>
  <div>{{count}}件</div>
  <ul>
    <li *ngFor="let comment of comments">{{comment}}</li>
  </ul>
  `,
})
export class AppComponent {
  url = 'http://gihyo.jp/';
  count = 0;
  comments: string[] = [];

  constructor(private hatena:HatenaService) {}

  onclick() {
    this.hatena.requestGet(this.url)
      .subscribe(
        data => {
          let result: string[] = [];
          data.bookmarks.forEach(function(value: any) {
            if (value.comment !== '') {
              result.push(value.comment)
            }
          });
          this.comments = result;
          this.count = data.count;
        },
        error => {
          this.count = 0;
          this.comments = [];
          console.log('はてなサービスのアクセスに失敗しました。');
        }
      );
  }
}