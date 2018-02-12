import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id="outer" (click)="onclick1()">outer
      <div id="inner" (click)="onclick2($event)">inner</div>
    </div>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  onclick1(e : any) {
    console.log('outerをクリックしました！');
  }

  onclick2(e : any) {
    e.stopPropagation();
    console.log('innerをクリックしました！');
  }
}