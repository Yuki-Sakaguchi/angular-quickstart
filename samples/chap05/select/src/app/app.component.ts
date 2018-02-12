import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form #myForm="ngForm">
      <select name="animal" [(ngModel)]="selected" (change)="show()">

      <!--リストボックスの生成-->
      <!--<select name="animal" size="3"
        [(ngModel)]="selected" (change)="show()" multiple>-->
        
        <option value="">ペットを選択してください</option>
        <option *ngFor="let item of data"
          [value]="item.value" [disabled]="item.disabled"
          [selected]="item.value === selected">{{item.label}}</option>
      </select>
    </form>
  `
})
export class AppComponent {
  selected = 'hamster';
  data = [
    { label: '犬', value: 'dog', disabled: false },
    { label: '猫', value: 'cat', disabled: false },
    { label: 'ハムスター', value: 'hamster', disabled: false },
    { label: '金魚', value: 'fish', disabled: true },
    { label: '亀', value: 'turtle', disabled: false }
  ];

  show() {
    console.log('現在値：' + this.selected);
  }
}
