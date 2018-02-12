import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form #myForm="ngForm">
      <ng-container *ngFor="let item of data; index as i">
        <label>
          <input type="checkbox" name="animal{{i}}"
            [(ngModel)]="data[i].selected"
            [value]="item.value"
            (change)="show()">{{item.label}}
        </label><br />
      </ng-container>
    </form>
  `
})
export class AppComponent {
  data = [
    { label: '犬', value: 'dog', selected: false },
    { label: '猫', value: 'cat', selected: true },
    { label: 'ハムスター', value: 'hamster', selected: true },
    { label: '金魚', value: 'fish', selected: false },
    { label: '亀', value: 'turtle', selected: false }
  ];

  show() {
    console.log(this.data);
  }
}