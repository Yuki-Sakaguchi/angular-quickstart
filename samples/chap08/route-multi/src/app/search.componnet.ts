import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  template: `
    <ul>
      <li>キーワード：{{keyword}}</li>
    </ul>
  `
})
export class SearchComponent implements OnInit {
  keyword = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(strs => {
      this.keyword = strs.join(' ');
    });
  }
}