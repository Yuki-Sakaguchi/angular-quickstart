import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">メインページ</a></li>
      <li><a routerLink="/article/13" routerLinkActive="current">
        記事 No.13</a></li>
      <li><a routerLink="/article/108" routerLinkActive="current">
        記事 No.108</a></li>

      <!--JavaScript経由でページを遷移-->
      <!--<li><a url="#" (click)="onclick()">記事 No.108</a></li>-->

      <li><a routerLink="/exam" routerLinkActive="current">Exampleページ</a></li>
      <li><a routerLink="/dummy" routerLinkActive="current">不正なページ</a></li>

      <!--配列として指定-->
      <!--<li><a [routerLink]="[ '/article', 100 ]"
        routerLinkActive="current">記事 No.100</a></li>-->
    </ul>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles:['.current { background-color:#ff0; }'],
})
export class AppComponent  {
  /*
  constructor(private router: Router) { }
    
  onclick() {
    this.router.navigate([ '/article', 108 ]);
  }
  */
}
