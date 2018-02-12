import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<pre>{{obj | json}}</pre>`
})
export class AppComponent  {
 obj = {
   name: 'トクジロウ',
   gender: undefined,
   birth: new Date(2007, 7, 15),
   age: 3,
   family: ['リンリン', 'サチ', 'ニンザブロウ'],
   work: function() { /* メソッドの中身 */ },
   other: {
     favorite: 'ひまわり',
     memo: '偏屈爺さん'
   }
 };
}
