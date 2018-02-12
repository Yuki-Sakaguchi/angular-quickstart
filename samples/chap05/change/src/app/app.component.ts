import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <form>
      <textarea cols="70" rows="5" name="tweet"
        [(ngModel)]="tweet" (input)="setcolor()"></textarea>
      <div [ngStyle]="myStyle">{{count}}</div>
    </form>
  `
})
export class AppComponent {
  max = 140;
  tweet= ''; 
  count = this.max;
  myStyle = { color: '#00f', fontWeight: 'normal' };
  
  setcolor() {
    this.count = this.max - this.tweet.length;
    if (this.count > 10) {
      this.myStyle = { color: '#00f', fontWeight: 'normal' }
    } else if (this.count > 0) {
      this.myStyle = { color: '#f0f', fontWeight: 'normal'  };
    } else {
      this.myStyle = { color: '#f00', fontWeight: 'bold' };
    }
  }
}
