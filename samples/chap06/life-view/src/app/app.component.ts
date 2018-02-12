import { Component, AfterViewChecked,
  QueryList, ViewChildren } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  template: `
    <my-child [index]="1"></my-child>
    <my-child [index]="2"></my-child>
    <my-child [index]="3"></my-child>
    <hr />
    完成：{{poems[0]}}　{{poems[1]}}　{{poems[2]}}
  `,
})
export class AppComponent implements AfterViewChecked {
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;
  poems = ['', '', ''];

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    this.children.forEach((item, index) => {
      if(this.poems[index] !== item.poem) {
        setTimeout(() => {
          this.poems[index] = item.poem;
        }, 0);
      }
    });
  }
}