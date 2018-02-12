import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input id="txt" name="txt" type="text" (input)="show($event)" />
    <ul [innerHTML]="msg"></ul>
  `

  // テンプレート参照変数
  /*
  template: `
    <input #txt id="txt" name="txt"
       type="text" (input)="show(txt.value)" />
    <ul [innerHTML]="msg"></ul>
  `
  */
})
export class AppComponent {
  msg = '';

  show(e: any) {
    this.msg += `<li>${e.target.value}</li>`;
  }

  /*
  show(input: string) {
    this.msg += `<li>${input}</li>`;
  }
  */
}
