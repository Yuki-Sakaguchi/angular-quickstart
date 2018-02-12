import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventComponent } from './event.component';
import { BookComponent } from './book.component';
import { WingsComponent } from './wings.component';

@Component({
  selector: 'my-app',
  template: `
    <div>
      広告バナー：<br />
      <ng-container *ngComponentOutlet="banner"></ng-container>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  interval: any;
  comps = [ EventComponent, BookComponent, WingsComponent ];
  current = 0;
  banner: any = EventComponent;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.current = (this.current + 1) % this.comps.length;
      this.banner = this.comps[this.current];
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
