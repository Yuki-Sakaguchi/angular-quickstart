import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>{{ favs.length | i18nPlural: messages }}</div>`
})
export class AppComponent  {
  favs = [ '山田理央', '鈴木洋平', '腰掛奈美' ];
  messages = {
    '=0': '［いいね！］されていません。',
    '=1': '1人だけ［いいね！］と言ってくれています。',
    'other': '# 人が［いいね！］と言っています。'
  };
}
