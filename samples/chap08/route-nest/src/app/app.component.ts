import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">メインページ</a></li>
      <li><a routerLink="/contents/100/pages/1" routerLinkActive="current">
        記事 No.100</a></li>
      <li><a [routerLink]="[ '/contents', 108, 'pages', 1]"
        routerLinkActive="current">記事 No.108</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles:['.current { background-color:#ff0; }'],
})
export class AppComponent  { }
