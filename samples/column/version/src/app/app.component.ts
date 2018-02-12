import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>{{v.full}}</p>`
})
export class AppComponent {
  v = VERSION;
}