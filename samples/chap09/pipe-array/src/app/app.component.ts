import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let d of (data | grep : myFilter)">{{d}}</li>
    </ul>
  `,
})
export class AppComponent  {
  data = [ 'あいうえお', 'かきくけ', 'さしす', 'たちつてと', 'な' ];

  myFilter(value: string) {
    return String(value).length < 5;
  };
}
