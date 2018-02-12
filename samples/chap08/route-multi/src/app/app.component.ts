import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="current"
        [routerLinkActiveOptions]="{ exact: true }">メインページ</a></li>

      <!--routerLinkディレクティブの場合-->
      <!--
      <li><a [routerLink]="[{ outlets: { primary: ['main'], other: ['search', 'Angular']}}]">
         メインページ</a></li>
      -->

      <li><a routerLink="/exam" routerLinkActive="current">Exampleページ</a></li>
      <li><a routerLink="/dummy" routerLinkActive="current">不正なページ</a></li>

      <!--otherビューだけ書替-->
      <!--<li><a [routerLink]="[{ outlets: { other: ['search', 'Angular5'] } }]">検索ページ</a></li>-->

    </ul>
    <hr />
    <router-outlet></router-outlet>
    <hr />
    <router-outlet name="other"></router-outlet>
  `,
    styles:['.current { background-color:#ff0; }'],
})
export class AppComponent  { }
