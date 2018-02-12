import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form #myForm="ngForm">
      <select name="animal" [(ngModel)]="selected" (change)="show()">
        <option value="">ペットを選択してください</option>
        <optgroup *ngFor="let group of keys(data)"
          label={{group}}>
          <option *ngFor="let item of data[group]"
            [value]="item.value" [disabled]="item.disabled" 
            [selected]="item.value === selected">{{item.label}}
          </option>
        </optgroup>
      </select>
    </form>
  `
})
export class AppComponent {
  selected = 'dog';
  data = {
    '哺乳類': [
        { label: '犬', value: 'dog', disabled: false },
        { label: '猫', value: 'cat', disabled: false },
        { label: 'ハムスター', value: 'hamster', disabled: false },
      ],
    '魚類': [
        { label: '金魚', value: 'fish', disabled: true },
        { label: '鯉', value: 'carp', disabled: false },
        { label: '熱帯魚', value: 'tropical fish', disabled: false },
      ],
    '爬虫類': [
        { label: '亀', value: 'turtle', disabled: false },
        { label: 'トカゲ', value: 'lizard', disabled: false },
        { label: 'ヘビ', value: 'snake', disabled: false }
      ]
  };

  keys(obj: Object) {
    return Object.keys(obj);
  }

  show() {
    console.log('現在値：' + this.selected);
  }
}