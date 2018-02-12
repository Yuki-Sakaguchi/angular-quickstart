import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input id="txt" name="txt" type="text" (keyup.enter)="show($event)" />
    <ul [innerHTML]="msg"></ul>
  `
})
export class AppComponent {
  msg = '';

  show(e: any) {
    this.msg += `<li>${e.target.value}</li>`;
  }
}
