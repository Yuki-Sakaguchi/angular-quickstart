import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // 単位付き
  template: `
    <div [style.font-size.%]="size">WINGSプロジェクト</div>
  `

  // 単位なし
  /*
  template: `
    <div [style.font-size]="size">WINGSプロジェクト</div>
  `
  */
})
export class AppComponent {
  size = 150;
  //size = '150%';
}
