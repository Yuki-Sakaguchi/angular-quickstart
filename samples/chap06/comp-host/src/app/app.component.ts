import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `
    <h3>こんにちは、Angular！</h3>
  `,
  host: {
    '(click)': 'onclick($event)',
    'role': 'banner',
    '[class.disabled]': 'true',
  }
})
export class AppComponent {
  
  onclick(e: any) {
    console.log(e.target);
  }
}