import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <p>元の文字列：{{title}}</p>
    <p>uppercase：{{title | uppercase}}</p>
    <p>lowercase：{{title | lowercase}}</p>
    <p>titlecase：{{title | titlecase}}</p>
  `
})
export class AppComponent  {
  title = 'ＷＩＮＧＳ project';
}
