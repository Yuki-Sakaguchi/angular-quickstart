import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li *ngFor="let comment of comments">{{comment}}</li>
  </ul>
  `,
})
export class HatenaComponent {
  url = '';
  comments: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let result: string[] = [];
    this.route.data.subscribe(data => {
      data['hatena'].bookmarks.forEach(function(value: any) {
        if (value.comment !== '') {
            result.push(value.comment)
        }
      });
      this.comments = result;
    });
  }
}
