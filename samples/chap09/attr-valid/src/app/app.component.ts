import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form #myForm="ngForm">
      <label>郵便番号；
        <input type="text" name="zip" [(ngModel)]="data.zip"
          #zip="ngModel" myZip />
      </label>
      <span *ngIf="zip.errors?.zip">郵便番号は999-9999の形式で入力してください。</span>
    </form>
  `,
})
export class AppComponent {
  data = {
    zip: '673-0121'
  };
}
