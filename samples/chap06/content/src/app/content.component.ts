import { Component } from '@angular/core';

@Component({
  selector: 'my-content',
  template: `
    <div>こんにちは、<ng-content></ng-content>さん！</div>
  `,
})
export class ContentComponent {
}
