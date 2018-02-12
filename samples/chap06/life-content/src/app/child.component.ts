import { Component } from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
    <div>
      一行詩：<input name="poem1" [(ngModel)]="poem" size="20" />
    </div>
  `,
})
export class ChildComponent {
   poem: string;
}