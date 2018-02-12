import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  template: `
  <div>
    <h1>記事情報 No.{{ id }}</h1>
    ［<a routerLink="./pages/1" routerLinkActive="current">1</a>］
    ［<a routerLink="./pages/2" routerLinkActive="current">2</a>］
  </div>
  <router-outlet></router-outlet>
  <hr />
  <a routerLink="/" routerLinkActive="current"
    [routerLinkActiveOptions]=" {exact: true }">トップページへ</a>
  `,
  styles:['.current { background-color:#ff0; }']
})
export class ContentComponent {
  id = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
  }
}