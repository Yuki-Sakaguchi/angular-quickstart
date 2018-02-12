import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <label>キーワード：
        <input #txt type="text" size="15" /></label>
      <input type="button" (click)="onclick(txt.value)" value="追加" />
      <ul>
        <li *ngFor="let d of (data | grep : myFilter)">{{d}}</li>
      </ul>
    </form>
  `,
  
})
export class AppComponent  {
  data = [ 'あいうえお', 'かきくけ', 'さしす', 'たちつてと', 'な' ];

  myFilter(value: string) {
    return String(value).length < 5;
  };

    onclick(txt :string) {    
    this.data.push(txt);
    //this.data = [].concat(this.data);
    console.log(this.data);
  }
}
