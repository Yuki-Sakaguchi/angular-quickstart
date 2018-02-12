import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
    <div>
      三行詩{{index}}：<input name="poem" [(ngModel)]="poem" size="20" />
    </div>
  `,
})
export class ChildComponent {
  @Input() index: number; 
  poem: string;
}