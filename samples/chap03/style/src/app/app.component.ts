import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div [style.background-color]="bcolor">WINGSプロジェクト</div>
  `

  // 式の値によって、オンオフを切り替えたい場合
  /*
  template: `
    <div [style.background-color]="bcolor ? '#0ff' : ''">
      WINGSプロジェクト</div>
  `
  */
})
export class AppComponent {
   bcolor = '#0ff';
  // bcolor = true;
}