import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  template: `
    <div>
      <h1>記事情報 No.{{ id }}</h1>
      <p>この記事は、{{ id }}番目の記事です。</p>
    </div>
  `
})
export class ArticleComponent {
    id = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.id = params['id']);
  }
}