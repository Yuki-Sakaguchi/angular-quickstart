import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div *myDeadline="end">
      <h2>ただいま全品半額セール中！</h2>
      <p>（ただし、食品・衣料品は除く）</p>
    </div>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent  {
  end = new Date(2018, 2, 31); 
}

