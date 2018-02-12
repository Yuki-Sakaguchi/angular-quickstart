import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">メインページ</a></li>
      <li><a routerLink="/data" routerLinkActive="current">Dataページ</a></li>  
      <li><a routerLink="/exam" routerLinkActive="current">Exampleページ</a></li>
      <li><a routerLink="/dummy" routerLinkActive="current">不正なページ</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles:['.current { background-color:#ff0; }'],
})
export class AppComponent  { }
