import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">メインページ</a></li>
      <li><a [routerLink]="[ '/hatena', 'http://gihyo.jp/' ]"
        routerLinkActive="current">
        ブックマークコメント</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles:['.current { background-color:#ff0; }'],
})
export class AppComponent  { }
