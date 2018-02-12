import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id="main" style="position:absolute; margin:50px; width:300px; 
      height:300px; border:solid 1px #000" (mousemove)="show($event)">
    <p>screen：{{screenX}}×{{screenY}}</p>
    <p>page：{{pageX}}×{{pageY}}</p>
    <p>client：{{clientX}}×{{clientY}}</p>
    <p>offset：{{offsetX}}×{{offsetY}}</p>
    </div>
  `
})
export class AppComponent {
  screenX = 0;
  screenY = 0;
  pageX = 0;
  pageY = 0;
  clientX = 0;
  clientY = 0;
  offsetX = 0;
  offsetY = 0;

  show(e : any) {
    this.screenX = e.screenX;
    this.screenY = e.screenY;
    this.pageX = e.pageX;
    this.pageY = e.pageY;
    this.clientX = e.clientX;
    this.clientY = e.clientY;
    this.offsetX = e.offsetX;
    this.offsetY = e.offsetY;
  }
}