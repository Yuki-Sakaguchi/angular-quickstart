import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
    <label for="name">名前：</label>
    <input id="name" name="name" type="text" [(ngModel)]="myName" />
    <div>こんにちは、{{myName}}さん！</div>
    </form>
  `
  
  // inputイベントを利用した記法
  /*
  template: `
    <form>
    <label for="name">名前：</label>
    <input id="name" name="name" type="text"
      [ngModel]="myName"
      (input)="myName=$event.target.value" />
    <div>こんにちは、{{myName}}さん！</div>
    </form>
  `  
  */

  // ngModelChangeイベントを利用した記法
  /*
  template: `
    <form>
    <label for="name">名前：</label>
    <input id="name" name="name" type="text"
      [ngModel]="myName"
      (ngModelChange)="myName=$event" />
    <div>こんにちは、{{myName}}さん！</div>
    </form>
  `
  */

  // 入力値を加工する
  /*
  template: `
    <form>
    <label for="name">名前：</label>
    <input id="name" name="name" type="text"
      [ngModel]="myName"
      (ngModelChange)="myName=$event.toUpperCase()" />
    <div>こんにちは、{{myName}}さん！</div>
    </form>
  `
  */

  // テキストボックスのデフォルト値
  /*
  template: `
    <form>
    <label for="name">名前：</label>
    <input id="name" name="name" type="text"
      [(ngModel)]="myName" value="権兵衛" />
    <div>こんにちは、{{myName}}さん！</div>
    </form>
  `
  */
})
export class AppComponent {
  myName = '山田';
}