import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">メインページ</a></li>
      <li><a routerLink="/article/13" routerLinkActive="current">
        期間限定記事</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles:['.current { background-color:#ff0; }'],  
})
export class AppComponent  { }
