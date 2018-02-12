import { Component } from '@angular/core';
import { Jsonp, URLSearchParams }  from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
  <form>
    <label for="url">URL：</label>
    <input id="url" name="url" type="url" size="50" [(ngModel)]="url" />
    <input type="button" (click)="onclick()" value="検索" />
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

  constructor(private jsonp:Jsonp) {}

  onclick() {
    let params = new URLSearchParams();
    params.set('url', this.url);
    params.set('callback', 'JSONP_CALLBACK');

    this.jsonp.get('http://b.hatena.ne.jp/entry/jsonlite/', { search: params })
      .subscribe(
        response => {
          let data = response.json() || {};
          this.count = data.count;

          let result: string[] = [];
          data.bookmarks.forEach(function(value: any) {
            if (value.comment !== '') {
              result.push(value.comment)
            }
          });
          this.comments = result;
        },
        error => {
          this.count = 0;
          this.comments = [];
          console.log('はてなサービスのアクセスに失敗しました。');
        }
      );
  }
}