import { Component, AfterContentChecked, ContentChild } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'my-parent',
  template: `
    <ng-content></ng-content>
    <hr />
    完成：{{poem}}
  `,
})
export class ParentComponent implements AfterContentChecked {
  @ContentChild(ChildComponent) child: ChildComponent;
  poem = '';

  ngAfterContentChecked() {
    if(this.poem !== this.child.poem) {
      this.poem = this.child.poem;
    }
  }
}