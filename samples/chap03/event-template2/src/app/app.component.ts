import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <label>姓：<input #last type="text" (change)="0" /></label><br />
    <label>名：<input #first type="text" (change)="0" /></label>
    <div>こんにちは、{{last.value}}{{first.value}}さん！</div>
  `
})
export class AppComponent { }

