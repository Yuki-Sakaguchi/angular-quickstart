import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form #myForm="ngForm" (ngSubmit)="show()">
    <div>
      <label for="url">URL：</label><br />
      <input id="url" name="url" type="url" 
        [(ngModel)]="user.url" #url="ngModel" required url />
      <span *ngIf="url.errors?.required">URLは必須です。</span>
      <span *ngIf="url.errors?.url">URLを正しい形式で入力してください。</span>
    </div>
    <div>
      <label for="mail">メールアドレス：</label><br />
      <input id="mail" name="mail" type="email" 
        [(ngModel)]="user.mail" #mail="ngModel" required email />
      <span *ngIf="mail.errors?.required">メールアドレスは必須です。</span>
      <span *ngIf="mail.errors?.email">メールアドレスを正しい形式で入力してください。</span>
    </div>
    <div>
      <label for="mail_confirm">メールアドレス（確認）：</label><br />
      <input id="mail_confirm" name="mail_confirm" type="email" 
        [(ngModel)]="user.mail_confirm" #mail_confirm="ngModel" [equalTo]="mail"/>
      <span *ngIf="mail_confirm.errors?.equalTo">メールアドレス同士が等しくなければなりません。</span>
    </div>
    <div>
      <input type="submit" value="送信" 
        [disabled]="myForm.invalid" />
    </div>
  </form>
  `,
})
export class AppComponent  {
  user = {
    url: '',
    mail: 'hoge@example.com',
    mail_confirm: ''
  };

    show() {
    console.log('URL：' + this.user.url);
    console.log('メールアドレス：' + this.user.mail);
    console.log('メールアドレス（確認）：' + this.user.mail_confirm);
  }
}
