import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    JavaScript F/Wの代表としてよくあげられるのが
    <span myColored="#f0f">Angular</span>です。
  `
})

export class AppComponent  {
  color = '#f0f';
}
