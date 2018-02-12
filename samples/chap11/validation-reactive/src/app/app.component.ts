import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="show()">
    <div>
      <label for="url">URL：</label><br />
      <input id="url" name="url" type="url" formControlName="url" />
      <span *ngIf="myForm.controls.url.errors?.required">
        URLは必須です。</span>
      <span *ngIf="myForm.controls.url.errors?.url">
        URLを正しい形式で入力してください。</span>
    </div>
    <div>
      <label for="mail">メールアドレス：</label><br />
      <input id="mail" name="mail" type="email" formControlName="mail" />
      <span *ngIf="myForm.controls.mail.errors?.required">
        メールアドレスは必須です。</span>
      <span *ngIf="myForm.controls.mail.errors?.email">
        メールアドレスを正しい形式で入力してください。</span>
    </div>
    <div>
      <label for="mail_confirm">メールアドレス（確認）：</label><br />
      <input id="mail_confirm" name="mail_confirm" type="email"
        formControlName="mail_confirm"/>
      <span *ngIf="myForm.controls.mail_confirm.errors?.equalTo">
        メールアドレス同士が等しくなければなりません。</span>
    </div>
    <div>
      <input type="submit" value="送信" 
        [disabled]="myForm.invalid" />
    </div>
  </form>
  `,
})
export class AppComponent {
  constructor(private builder: FormBuilder) { }

  url = new FormControl('',
    [
      Validators.required,
      CustomValidators.url
    ]   
  );
  mail = new FormControl('hoge@example.com',
    [
      Validators.required,
      Validators.email
    ]
  );
  mail_confirm = new FormControl('', [
    CustomValidators.equalTo(this.mail)
  ]);

  myForm  = this.builder.group({
    url: this.url,
    mail: this.mail,
    mail_confirm: this.mail_confirm
  });

  show() {
    console.log('URL：' + this.url.value);
    console.log('メールアドレス：' + this.mail.value);
    console.log('メールアドレス（確認）：' + this.mail_confirm.value);
  }
}
