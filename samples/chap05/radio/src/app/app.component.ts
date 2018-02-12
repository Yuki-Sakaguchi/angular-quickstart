import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form #myForm="ngForm">
      <ng-container *ngFor="let item of data; index as i">
        <label>
          <input type="radio" name="animal"
            [(ngModel)]="selected"
            [value]="item.value" [checked]="selected == item.value"
            (change)="show(i)">{{item.label}}
        </label><br />
      </ng-container>
    </form>
  `
})
export class AppComponent {
  selected = 'hamster';
  data = [
    { label: '犬', value: 'dog' },
    { label: '猫', value: 'cat' },
    { label: 'ハムスター', value: 'hamster' },
    { label: '金魚', value: 'fish' },
    { label: '亀', value: 'turtle' }
  ];

  show(i : number) {
    console.log('現在値（ラベル）：' + this.data[i].label);
    console.log('現在値（値）：' + this.selected);
  }
}