import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
    <label for="zip">郵便番号：</label>
    <input id="zip" name="zip" type="text" size="10"
      (keypress)="mask($event)" />
    </form>
  `
})
export class AppComponent {
  mask(e : any) {
    let k = e.which;
    if (!((k >= 48 && k <= 57) || k ===45 || k=== 8 || k === 0)) {
      e.preventDefault();
    }
  }
}
