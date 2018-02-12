import { Component } from "@angular/core";

@Component({
  selector: 'my-app',  
  template: `
    <input type="button" (click)="show()" value="現在時刻" />
    {{msg}}    
  `
  
  /*
  template: `
    <input type="button" on-click="show()" value="現在時刻" />
    {{msg}}
  `
  */
  /*
  template: `
    <input type="button" (click)="show(event)" value="現在時刻" />
    {{msg}}    
  `
  */
  /*
  template: `
    <input type="button" (click)="show($event)" value="現在時刻" />
    {{msg}}
  `
  */
})
export class AppComponent {
  msg = '---';
  
  show() {
    this.msg = new Date().toLocaleString();
  }
  

  /*
  show(e: any) {
    this.msg = new Date().toLocaleString();
    console.log(e);
  }
  */
}
