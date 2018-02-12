import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
    <!--配列membersの内容を順に出力-->
    <li *ngFor="let m of members">
      {{m.sex | i18nSelect :messages }}は{{m.name}}です。
    </li>
  </ul>`
})
export class AppComponent  {
  members = [
    { name: '佐藤リオ', sex: 'female' },
    { name: '田中聡', sex: 'male' },
    { name: '郷田瑞樹', sex: 'unknown' }
  ];
  messages: {[msg: string]: string} =
    {
     'male': '彼',
     'female': '彼女',
     'other': '彼／彼女'
    };
}
