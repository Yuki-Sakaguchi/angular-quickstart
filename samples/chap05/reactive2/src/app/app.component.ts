import { Component } from "@angular/core";
import { FormGroup, FormControl,
         FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "my-app",
  template: `
    <form [formGroup]="myForm" (ngSubmit)="show()">
    <div>
      <label for="mail">メールアドレス：</label><br />
      <input id="mail" name="mail" type="email"
        [formControl]="myForm.controls.mail" />
      <span *ngIf="myForm.controls.mail.errors?.required">
        メールアドレスは必須です。</span>
      <span *ngIf="myForm.controls.mail.errors?.email">
        メールアドレスを正しい形式で入力してください。</span>
    </div>
    <div>
      <label for="passwd">パスワード：</label><br />
      <input id="passwd" name="passwd" type="password"
        [formControl]="myForm.controls.passwd" />
      <span *ngIf="myForm.controls.passwd.errors?.required">
        パスワードは必須です。</span>
       <span *ngIf="myForm.controls.passwd.errors?.minlength">
        パスワードは6文字以上で入力してください。</span>
    </div>
    <div>
      <label for="name">名前（漢字）：</label><br />
      <input id="name" name="name" type="text" [formControl]="myForm.controls.name" />
      <span *ngIf="myForm.controls.name.errors?.required">
        名前（漢字）は必須です。</span>
      <span *ngIf="myForm.controls.name.errors?.minlength">
        名前（漢字）は3文字以上で入力してください。</span>
      <span *ngIf="myForm.controls.name.errors?.maxlength">
        名前（漢字）は10文字以内で入力してください。</span>
    </div>
    <div>
      <label for="memo">備考：</label><br />
      <textarea id="memo" name="memo" rows="5" cols="30"
        [formControl]="myForm.controls.memo"></textarea>
      <span *ngIf="myForm.controls.memo.errors?.maxlength">
        備考は10文字以内で入力してください。</span>
    </div>
    <div>
      <input type="submit" value="送信" 
        [disabled]="myForm.invalid" />
    </div>
    </form>
  `
})
export class AppComponent {
  myForm = this.builder.group({
    mail: new FormControl('hoge@example.com', [
      Validators.required,
      Validators.email
    ]),
    passwd: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    name: new FormControl('名無権兵衛',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)    
    ]),
    memo: new FormControl('メモ',[
      Validators.maxLength(10)
    ])
  }); 

  constructor(private builder: FormBuilder) { }

  show() {
    console.log('メールアドレス：' + this.myForm.controls['mail'].value);
    console.log('パスワード：' + this.myForm.controls['passwd'].value);
    console.log('名前（漢字）：' + this.myForm.controls['name'].value);
    console.log('備考：' + this.myForm.controls['memo'].value);
    console.log('すべて：');
    console.log(this.myForm.value);
  }
}