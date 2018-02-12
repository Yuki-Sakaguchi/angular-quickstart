import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <table class="table">
      <tr>
        <th>値</th><th>index</th><th>first</th>
        <th>last</th><th>odd</th><th>even</th>
      </tr>
      <tr *ngFor="let obj of data; index as i; first as first;
         last as last; odd as odd; even as even;">
        <td>{{obj}}</td>
        <td>{{i}}</td>
        <td>{{first ? '○' : '－'}}</td>
        <td>{{last ? '○' : '－'}}</td>
        <td>{{odd ? '○' : '－'}}</td>
        <td>{{even ? '○' : '－'}}</td>
      </tr>
    </table>`
})
export class AppComponent  {
  data = [ '子', '丑', '寅', '卯', '辰', '巳',
      '午', '未', '申', '酉', '戌', '亥' ];
}
